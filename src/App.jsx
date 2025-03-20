import { ThemeProvider } from 'styled-components'
import './App.css'
import { theme } from './utils/theme'
import GlobalStyle from './styles/GlobalStyle'
import { useEffect, useReducer, useRef, useState } from 'react'
import { createContext } from 'react'
import formatDate from './utils/formatDate'

import Header from './components/Header'
import Container from './styles/Container'
import Editor from './components/Editor'
import DailyContentHeader from './components/DailyContentHeader'
import TodoViewer from './components/TodoViewer'
import { loadTodos, saveTodos } from './utils/storage'
import FlexContainerRow from './styles/FlexContainerRow'
import WeeklyContentHeader from './components/WeeklyContentHeader'

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'INIT':
      return action.data
    case 'CREATE':
      return {
        ...state,
        [action.date]: [
          ...(state[action.date] || []),
          {
            id: action.data.id,
            content: action.data.content,
            isFinished: false,
          },
        ],
      }
    case 'TOGGLE_STATUS':
      return {
        ...state,
        [action.date]: state[action.date].map((todo) =>
          todo.id === action.id ? { ...todo, isFinished: !todo.isFinished } : todo
        ),
      }
    case 'DELETE':
      return {
        ...state,
        [action.date]: state[action.date].filter((todo) => todo.id !== action.id),
      }
    default:
      return state
  }
}

export const TodoStateContext = createContext()
export const TodoDispatchContext = createContext()

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [todos, updateTodos] = useReducer(todoReducer, {})
  const [pivotDate, setPivotDate] = useState(formatDate(new Date()))

  useEffect(() => {
    const storedTodos = loadTodos()
    console.log(storedTodos)
    updateTodos({
      type: 'INIT',
      data: storedTodos,
    })
    setTimeout(() => setIsLoading(false), 0)
  }, [])

  useEffect(() => {
    if (!isLoading) saveTodos(todos)
  }, [todos])

  const onCreate = (id, content) => {
    updateTodos({
      type: 'CREATE',
      date: pivotDate,
      data: {
        id,
        content,
      },
    })
  }

  const onUpdateStatus = (id) => {
    updateTodos({
      type: 'TOGGLE_STATUS',
      date: pivotDate,
      id,
    })
  }

  const onDelete = (id) => {
    updateTodos({
      type: 'DELETE',
      date: pivotDate,
      id,
    })
  }

  const dateInputRef = useRef(null)
  const onClickDate = () => {
    dateInputRef.current.showPicker()
  }
  const onChangeDate = (e) => {
    setPivotDate(e.target.value)
  }

  return (
    <>
      <TodoStateContext.Provider value={{ todos, pivotDate }}>
        <TodoDispatchContext.Provider
          value={{ onCreate, onUpdateStatus, onDelete, setPivotDate, onClickDate }}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <FlexContainerRow>
              <Container>
                <WeeklyContentHeader />
              </Container>
              <input ref={dateInputRef} onChange={onChangeDate} type="date" hidden />
              <Container>
                <DailyContentHeader />
                <Editor />
                <TodoViewer />
              </Container>
            </FlexContainerRow>
          </ThemeProvider>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </>
  )
}

export default App

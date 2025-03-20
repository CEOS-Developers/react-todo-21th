import { ThemeProvider } from 'styled-components'
import './App.css'
import { theme } from './utils/theme'
import GlobalStyle from './styles/GlobalStyle'
import { useReducer, useState } from 'react'
import { createContext } from 'react'
import formatDate from './utils/formatDate'

import Header from './components/Header'
import Container from './styles/Container'
import Editor from './components/Editor'

const mockData = {
  '2025-03-17': [
    { id: '1742276032173', content: '2', isFinished: false },
    { id: '1742276032462', content: '3', isFinished: false },
    { id: '1742276032956', content: '4', isFinished: false },
    { id: '1742276031891', content: '1', isFinished: true },
  ],
  '2025-03-18': [
    { id: '1742276032173', content: '2', isFinished: false },
    { id: '1742276032462', content: '3', isFinished: false },
    { id: '1742276032956', content: '4', isFinished: false },
    { id: '1742276031891', content: '1', isFinished: true },
  ],
  '2025-03-20': [
    { id: '1742284939484', content: '세오스 엠티', isFinished: false },
    { id: '1742362973445', content: '1', isFinished: false },
  ],
}

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return {
        ...state,
        [action.date]: [
          ...state[action.date],
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
  const [todos, updateTodos] = useReducer(todoReducer, mockData)
  const [pivotDate, setPivotDate] = useState(formatDate(new Date()))

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

  return (
    <>
      <TodoStateContext.Provider value={{ todos, pivotDate }}>
        <TodoDispatchContext.Provider value={{ onCreate, onUpdateStatus, onDelete, setPivotDate }}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <Container></Container>
            <Container>
              <Editor />
            </Container>
          </ThemeProvider>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </>
  )
}

export default App

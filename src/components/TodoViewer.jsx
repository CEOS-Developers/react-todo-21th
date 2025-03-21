import React, { useContext } from 'react'
import { TodoStateContext } from '../App'
import TodoItem from './TodoItem'
import styled from 'styled-components'

const ScrollDiv = styled.div`
  overflow-y: scroll;
  height: 250px;
`

const TodoViewer = () => {
  const { todos, pivotDate } = useContext(TodoStateContext)
  const dailyTodos = todos[pivotDate] || []
  const finishedTodos = []
  return (
    <ScrollDiv>
      {dailyTodos.map((todo) => {
        if (todo.isFinished) {
          finishedTodos.push(todo)
          return
        }
        return <TodoItem key={todo.id} {...todo}></TodoItem>
      })}
      {finishedTodos.map((todo) => (
        <TodoItem key={todo.id} {...todo}></TodoItem>
      ))}
    </ScrollDiv>
  )
}

export default TodoViewer

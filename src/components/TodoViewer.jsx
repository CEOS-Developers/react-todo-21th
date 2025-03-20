import React, { useContext } from 'react'
import { TodoStateContext } from '../App'
import TodoItem from './TodoItem'

const TodoViewer = () => {
  const { todos, pivotDate } = useContext(TodoStateContext)
  const dailyTodos = todos[pivotDate] || []
  return (
    <div>
      {dailyTodos.map((todo) => (
        <TodoItem key={todo.id} {...todo}></TodoItem>
      ))}
    </div>
  )
}

export default TodoViewer

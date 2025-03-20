const getFinishedTodoCount = (dailyTodos) => {
  const finishedTodos = dailyTodos.filter((todo) => todo.status === true).length

  return finishedTodos
}

export default getFinishedTodoCount

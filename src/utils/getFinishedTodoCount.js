const getFinishedTodoCount = (dailyTodos) => {
  const finishedTodos = dailyTodos.filter((todo) => todo.isFinished === true).length

  return finishedTodos
}

export default getFinishedTodoCount

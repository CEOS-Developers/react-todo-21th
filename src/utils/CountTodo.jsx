//완료된 할 일 갯수 세기
export const countCompletedTodos = (todos) => {
  return todos.filter(todo => todo.completed).length;
}
//미완료된 할 일 갯수 세기
export const countPendingTodos = (todos) => {
  return todos.filter(todo => ! todo.completed).length;
}
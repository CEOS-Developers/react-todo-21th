import { KEY } from './constant'

const saveTodos = (todos) => {
  localStorage.setItem(KEY, JSON.stringify(todos))
}

const loadTodos = () => {
  if (localStorage.getItem(KEY)) return JSON.parse(localStorage.getItem(KEY))
}

export { saveTodos, loadTodos }

import { DateTodos } from '../types/todo';

const STORAGE_KEY = 'date-todos';

function loadDateTodos(): DateTodos {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? (JSON.parse(data) as DateTodos) : {};
}

function saveDateTodos(dateTodos: DateTodos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dateTodos));
}

export { loadDateTodos, saveDateTodos };

import { DateTodos } from '../types/todo';

const STORAGE_KEY = 'date-todos';

function loadDateTodos(): DateTodos {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return {};

  const parsedData = JSON.parse(data) as DateTodos;

  // string -> Date
  Object.keys(parsedData).forEach((key) => {
    parsedData[key] = parsedData[key].map((todo) => ({
      ...todo,
      date: new Date(todo.date),
    }));
  });

  return parsedData;
}

function saveDateTodos(dateTodos: DateTodos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dateTodos));
}

export { loadDateTodos, saveDateTodos };

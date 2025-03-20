import { getFormattedDate } from './dateUtils';

interface Todo {
  text: string;
  isCompleted: boolean;
}

/* localStorage에서 특정 날짜의 할 일 불러오기 */
export const getTodosFromStorage = (date: Date): Todo[] => {
  const savedTodos = localStorage.getItem(getFormattedDate(date));
  return savedTodos ? JSON.parse(savedTodos) : [];
};

/*localStorage에 할 일 저장 */
export const saveTodosToStorage = (date: Date, todos: Todo[], setTodos: (todos: Todo[]) => void) => {
  setTodos(todos);
  localStorage.setItem(getFormattedDate(date), JSON.stringify(todos));
};

/* 새로운 할 일 추가 */
export const addTodo = (text: string, todos: Todo[], date: Date, setTodos: (todos: Todo[]) => void) => {
  const updatedTodos = [...todos, { text, isCompleted: false }];
  saveTodosToStorage(date, updatedTodos, setTodos);
};

/* 할 일 삭제 */
export const removeTodo = (index: number, todos: Todo[], date: Date, setTodos: (todos: Todo[]) => void) => {
  const updatedTodos = todos.filter((_, i) => i !== index);
  saveTodosToStorage(date, updatedTodos, setTodos);
};

/* 완료 상태 토글 */
export const toggleComplete = (index: number, todos: Todo[], date: Date, setTodos: (todos: Todo[]) => void) => {
  const updatedTodos = todos.map((todo, i) => (i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo));
  saveTodosToStorage(date, updatedTodos, setTodos);
};

/* 날짜 변경 */
export const changeDate = (days: number, currentDate: Date, setCurrentDate: (date: Date) => void) => {
  const newDate = new Date(currentDate);
  newDate.setDate(currentDate.getDate() + days);
  setCurrentDate(newDate);
};

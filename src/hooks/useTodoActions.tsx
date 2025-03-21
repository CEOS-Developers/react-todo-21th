import { useCallback } from 'react';
import { AddTodo, ToggleTodo, RemoveTodo } from '../types/todoActions';
import { UseTodoStateReturn } from './useTodoState';
import formatDateKey from '../utils/formatDateKey';
import generateId from '../utils/generateId';

export interface UseTodoActionsReturn {
  addTodo: AddTodo;
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
}

function useTodoActions(state: UseTodoStateReturn): UseTodoActionsReturn {
  const { dateTodos: _, setDateTodos } = state;

  // Add Todo Item
  const addTodo: AddTodo = useCallback(
    (date: Date, text: string) => {
      if (!date || !text.trim()) return;

      const dateKey = formatDateKey(date);

      setDateTodos((prev) => ({
        ...prev,
        [dateKey]: [
          ...(prev[dateKey] || []),
          { id: generateId(), date: date, text: text, isDone: false },
        ],
      }));
    },
    [setDateTodos],
  );

  // Toggle Todo Item
  const toggleTodo: ToggleTodo = useCallback(
    (date: Date, id: string) => {
      const dateKey = formatDateKey(date);

      setDateTodos((prev) => ({
        ...prev,
        [dateKey]:
          prev[dateKey]?.map((todo) =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
          ) || [],
      }));
    },
    [setDateTodos],
  );

  // Remove Todo Item
  const removeTodo: RemoveTodo = useCallback(
    (date: Date, id: string) => {
      const dateKey = formatDateKey(date);

      setDateTodos((prev) => ({
        ...prev,
        [dateKey]: prev[dateKey]?.filter((todo) => todo.id !== id) || [],
      }));
    },
    [setDateTodos],
  );

  return { addTodo, toggleTodo, removeTodo };
}

export { useTodoActions };

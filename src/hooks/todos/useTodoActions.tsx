import { useCallback } from 'react';
import { AddTodo, ToggleTodo, RemoveTodo } from '../../types/todoActions';
import { UseTodoStateReturn } from './useTodoState';
import generateId from '../../utils/generateId';

export interface UseTodoActionsReturn {
  addTodo: AddTodo;
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
}

function useTodoActions(state: UseTodoStateReturn): UseTodoActionsReturn {
  const { dateTodos: _, setDateTodos } = state;

  // Add Todo Item
  const addTodo: AddTodo = useCallback(
    (dateKey: string, text: string) => {
      if (!dateKey || !text.trim()) return;

      setDateTodos((prev) => ({
        ...prev,
        [dateKey]: [
          { id: generateId(), dateKey: dateKey, text: text, isDone: false },
          ...(prev[dateKey] || []),
        ],
      }));
    },
    [setDateTodos],
  );

  // Toggle Todo Item
  const toggleTodo: ToggleTodo = useCallback(
    (dateKey: string, id: string) => {
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
    (dateKey: string, id: string) => {
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

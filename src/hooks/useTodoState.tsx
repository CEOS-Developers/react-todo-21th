import React, { useState, useEffect } from 'react';
import { DateTodos } from '../types/todo';
import { loadDateTodos, saveDateTodos } from '../services/localStorage';

export interface UseTodoStateReturn {
  dateTodos: DateTodos;
  setDateTodos: React.Dispatch<React.SetStateAction<DateTodos>>;
}

function useTodoState(): UseTodoStateReturn {
  const [dateTodos, setDateTodos] = useState<DateTodos>(() => loadDateTodos());

  useEffect(() => {
    saveDateTodos(dateTodos);
  }, [dateTodos]);

  return { dateTodos, setDateTodos };
}

export { useTodoState };

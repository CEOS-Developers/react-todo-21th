import { useMemo } from 'react';
import { TodoStats } from '../../types/todo';
import { UseTodoStateReturn } from './useTodoState';

export interface UseTodoStatisticsReturn {
  dateStats: TodoStats;
}

function useTodoStatistics(state: UseTodoStateReturn): UseTodoStatisticsReturn {
  const { dateTodos, setDateTodos: _ } = state;

  const dateStats = useMemo(() => {
    return Object.fromEntries(
      Object.entries(dateTodos).map(([dateKey, todos]) => [
        dateKey,
        {
          totalCount: todos.length,
          doneCount: todos.filter((t) => t.isDone).length,
        },
      ]),
    );
  }, [dateTodos]);

  return { dateStats };
}

export { useTodoStatistics };

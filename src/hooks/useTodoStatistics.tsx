import { useMemo } from 'react';
import { UseTodoStateReturn } from './useTodoState';

export interface UseTodoStatisticsReturn {
  dateStats: Record<string, { totalCount: number; doneCount: number }>;
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

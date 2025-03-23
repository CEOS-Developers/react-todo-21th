import { useTodoState, UseTodoStateReturn } from './useTodoState';
import { useTodoActions, UseTodoActionsReturn } from './useTodoActions';
import {
  useTodoStatistics,
  UseTodoStatisticsReturn,
} from './useTodoStatistics';

export interface UseDateTodosReturn
  extends UseTodoStateReturn,
    UseTodoActionsReturn,
    UseTodoStatisticsReturn {}

function useDateTodos(): UseDateTodosReturn {
  const state = useTodoState();
  const actions = useTodoActions(state);
  const statistics = useTodoStatistics(state);

  return { ...state, ...actions, ...statistics };
}

export { useDateTodos };

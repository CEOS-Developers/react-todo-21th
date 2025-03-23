import { useCalendarState, UseCalendarStateReturn } from './useCalendarState';
import {
  useCalendarActions,
  UseCalendarActionsReturn,
} from './useCalendarActions';

export interface UseCalendarLogicReturn
  extends UseCalendarStateReturn,
    UseCalendarActionsReturn {}

function useCalendarLogic(): UseCalendarLogicReturn {
  const state = useCalendarState();
  const actions = useCalendarActions(state);

  return { ...state, ...actions };
}

export { useCalendarLogic };

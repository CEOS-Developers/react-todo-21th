export interface Todo {
  id: string;
  dateKey: string; // Date() contains time, too (don't use)
  text: string;
  isDone: boolean;
}

export type DateTodos = Record<string, Todo[]>;

export type TodoStats = Record<
  string,
  { totalCount: number; doneCount: number }
>;

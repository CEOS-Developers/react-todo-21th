export interface Todo {
  id: string;
  date: Date;
  text: string;
  isDone: boolean;
}

export type DateTodos = Record<string, Todo[]>;

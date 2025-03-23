export interface Todos {
  tag: string;
  todos: Todo[];
}

export interface NewTodo {
  content: string;
  date: Date | null;
  tag: string;
}

export interface Todo {
  id: number;
  content: string;
  date: Date | null;
  isComplete: boolean;
}

export interface Tags {
  name: string;
  background: string;
}

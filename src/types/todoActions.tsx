export type AddTodo = (date: Date, text: string) => void;
export type ToggleTodo = (date: Date, id: string) => void;
export type RemoveTodo = (date: Date, id: string) => void;

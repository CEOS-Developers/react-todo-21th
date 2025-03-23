export type AddTodo = (dateKey: string, text: string) => void;
export type ToggleTodo = (dateKey: string, id: string) => void;
export type RemoveTodo = (dateKey: string, id: string) => void;

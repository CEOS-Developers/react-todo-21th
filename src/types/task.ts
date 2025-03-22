export type Task = {
  id: string;
  content: string;
  completed: boolean;
};

export type TasksByDate = {
  [date: string]: Task[];
};

import { createContext, useContext } from 'react';

import { TasksByDate } from '@/types/task';

type TaskContextType = {
  tasksByDate: TasksByDate;
  addTask: (date: string, content: string) => void;
  toggleTask: (date: string, taskId: string) => void;
  deleteTask: (date: string, taskId: string) => void;
  updateTask: (date: string, taskId: string, content: string) => void;
};

export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);

export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};

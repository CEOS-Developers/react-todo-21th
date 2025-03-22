import { useEffect, useState } from 'react';

import { TasksByDate } from '@/types/task';
import { TaskContext } from '@/hooks/useTasks';

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const storedTasks = localStorage.getItem('tasks');

  const [tasksByDate, setTasksByDate] = useState<TasksByDate>(
    storedTasks ? JSON.parse(storedTasks) : {}
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksByDate));
  }, [tasksByDate]);

  const addTask = (date: string, content: string) => {
    const newTask = {
      id: crypto.randomUUID(),
      content,
      completed: false,
    };

    // console.log('New Task: ', newTask);

    setTasksByDate((prev) => {
      const updatedTasks = [...(prev[date] || []), newTask];

      return {
        ...prev,
        [date]: updatedTasks,
      };
    });
  };

  const toggleTask = (date: string, taskId: string) => {
    setTasksByDate((prev) => {
      return {
        ...prev,
        [date]: prev[date].map((task) =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        ),
      };
    });
  };

  const deleteTask = (date: string, taskId: string) => {
    setTasksByDate((prev) => {
      const updatedTasks = prev[date].filter((task) => task.id !== taskId);

      // 모든 할 일이 삭제되면 해당 날짜 키 제거
      if (updatedTasks.length === 0) {
        const { [date]: _, ...rest } = prev;
        return rest;
      }

      return { ...prev, [date]: updatedTasks };
    });
  };

  const updateTask = (date: string, taskId: string, newContent: string) => {
    setTasksByDate((prev) => ({
      ...prev,
      [date]: prev[date].map((task) =>
        task.id === taskId ? { ...task, content: newContent } : task
      ),
    }));
  };

  return (
    <TaskContext.Provider
      value={{ tasksByDate, addTask, toggleTask, deleteTask, updateTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

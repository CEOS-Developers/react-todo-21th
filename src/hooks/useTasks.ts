import { useEffect, useState } from 'react';

import { TasksByDate } from '@/types/task';

export const useTasks = () => {
  const storedTasks = localStorage.getItem('tasks');

  const [tasksByDate, setTasksByDate] = useState<TasksByDate>(
    storedTasks ? JSON.parse(storedTasks) : {}
  );

  const addTask = (date: string, content: string) => {
    const newTask = {
      id: crypto.randomUUID(),
      content,
      completed: false,
    };

    console.log('New Task: ', newTask);

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

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksByDate));
    console.log('Tasks updated in localStorage:', tasksByDate);
  }, [tasksByDate]);

  return {
    tasksByDate,
    addTask,
    toggleTask,
  };
};

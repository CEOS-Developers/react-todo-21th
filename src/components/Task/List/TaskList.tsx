import { JSX } from 'react/jsx-runtime';

import TaskItem from '../Item/TaskItem';

import { Task } from '@/types/task';

import { useTasks } from '@/hooks/useTasks';
import { useDate } from '@/hooks/useDate';

import * as S from './TaskList.styled';

type TaskListProps = {
  tasks: Task[];
};

const TaskList = ({ tasks }: TaskListProps): JSX.Element => {
  const { toggleTask, deleteTask, updateTask } = useTasks();
  const { selectedDate } = useDate();

  return (
    <S.TaskListSection>
      {tasks.length > 0 ? (
        <S.TaskListContainer>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              content={task.content}
              isCompleted={task.completed}
              toggleTask={() => toggleTask(selectedDate, task.id)}
              deleteTask={() => deleteTask(selectedDate, task.id)}
              updateTask={(newContent) =>
                updateTask(selectedDate, task.id, newContent)
              }
            />
          ))}
        </S.TaskListContainer>
      ) : (
        <S.EmptyTask>No Tasks To Do!</S.EmptyTask>
      )}
    </S.TaskListSection>
  );
};

export default TaskList;

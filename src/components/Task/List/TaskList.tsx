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
  const { toggleTask } = useTasks();
  const { selectedDate } = useDate();

  return (
    <S.TaskListSection>
      <S.TaskListContainer>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              content={task.content}
              isCompleted={task.completed}
              toggleTask={() => toggleTask(selectedDate, task.id)}
            />
          ))
        ) : (
          <S.EmptyTask>No Tasks To Do!</S.EmptyTask>
        )}
      </S.TaskListContainer>
    </S.TaskListSection>
  );
};

export default TaskList;

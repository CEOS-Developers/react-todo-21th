import { JSX } from 'react/jsx-runtime';

import Postit from '@/components/Postit/Postit';
import TaskCount from '../TaskCount/TaskCount';
import TaskList from '@/components/Task/List/TaskList';
import { ListIcon } from '@/icons/ToDoList';

import { Task } from '@/types/task';

import * as S from './ToDo.styled';

type ToDoProps = {
  toDoList: Task[];
};

const ToDo = ({ toDoList }: ToDoProps): JSX.Element => {
  return (
    <Postit paperColor="#FBF3DB">
      <S.ToDoHeaderSection>
        <S.ToDoTitleContainer>
          <S.ToDoTitle>To Do</S.ToDoTitle>
          <ListIcon />
        </S.ToDoTitleContainer>
        <TaskCount taskCount={toDoList.length} />
      </S.ToDoHeaderSection>

      {/* To Do List */}
      <TaskList tasks={toDoList} />
    </Postit>
  );
};

export default ToDo;

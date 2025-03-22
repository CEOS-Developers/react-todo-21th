import { JSX } from 'react/jsx-runtime';

import Postit from '@/components/Postit/Postit';
import TaskCount from '../../Task/Count/TaskCount';
import TaskList from '@/components/Task/List/TaskList';
import { DoneIcon } from '@/icons/ToDoList';

import { Task } from '@/types/task';

import * as S from './Done.styled';

type DoneProps = {
  doneList: Task[];
};

const Done = ({ doneList }: DoneProps): JSX.Element => {
  return (
    <Postit paperColor="#DDEBF1">
      <S.DoneHeader>
        <S.DoneTitleSection>
          <S.DoneTitle>Done</S.DoneTitle> 
          <DoneIcon />
        </S.DoneTitleSection>
        <TaskCount taskCount={doneList.length} isDone={true} />
      </S.DoneHeader>

      <TaskList tasks={doneList} />
    </Postit>
  );
};

export default Done;

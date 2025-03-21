import { JSX } from 'react/jsx-runtime';

import Postit from '@/components/Postit/PostIt';
import { DoneIcon } from '@/icons/ToDoList';

import * as S from './Done.styled';
import TaskCount from '../TaskCount/TaskCount';

const Done = (): JSX.Element => {
  return (
    <Postit paperColor="#DDEBF1">
      <S.DoneHeader>
        <S.DoneTitleSection>
          <S.DoneTitle>Done</S.DoneTitle>
          <DoneIcon />
        </S.DoneTitleSection>
        <TaskCount taskCount={0} isDone={true} />
      </S.DoneHeader>
    </Postit>
  );
};

export default Done;

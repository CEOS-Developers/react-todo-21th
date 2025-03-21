import Postit from '@/components/Postit/PostIt';

import TaskCount from '../TaskCount/TaskCount';
import { ListIcon } from '@/icons/ToDoList';

import * as S from './ToDo.styled';

const ToDo = () => {
  return (
    <Postit paperColor="#FBF3DB">
      <S.ToDoHeader>
        <S.ToDoTitleSection>
          <S.ToDoTitle>To Do</S.ToDoTitle>
          <ListIcon />
        </S.ToDoTitleSection>
        <TaskCount taskCount={12} />
      </S.ToDoHeader>
    </Postit>
  );
};

export default ToDo;

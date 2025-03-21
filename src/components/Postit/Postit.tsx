import { JSX } from 'react/jsx-runtime';

import { PostitPaper } from '@/icons/ToDoList';

import * as S from './PostIt.styled';

type PostItProps = {
  children: React.ReactNode;
};

const Postit = ({ children }: PostItProps): JSX.Element => {
  return (
    <S.PostitWrapper>
      <PostitPaper />
      <S.InnerContent>{children}</S.InnerContent>
    </S.PostitWrapper>
  );
};

export default Postit;

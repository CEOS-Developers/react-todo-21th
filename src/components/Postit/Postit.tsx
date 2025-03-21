import { JSX } from 'react/jsx-runtime';

import { PostitPaper } from '@/icons/ToDoList';

import * as S from './PostIt.styled';

type PostItProps = {
  children: React.ReactNode;
  paperColor?: string;
};

const Postit = ({ children, paperColor }: PostItProps): JSX.Element => {
  return (
    <S.PostitWrapper>
      <PostitPaper $paperColor={paperColor} />
      <S.InnerContent>{children}</S.InnerContent>
    </S.PostitWrapper>
  );
};

export default Postit;

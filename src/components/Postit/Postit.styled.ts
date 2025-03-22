import styled from 'styled-components';

export const PostitWrapper = styled.div`
  position: relative;

  flex: 1;

  width: 100%;
  height: 100%;

  display: flex;
`;

export const PostitPaper = styled.img`
  width: 100%;
  height: 100%;
`;

export const InnerContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  height: 100%;
  padding: 5.6rem 6.4rem 2.4rem;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

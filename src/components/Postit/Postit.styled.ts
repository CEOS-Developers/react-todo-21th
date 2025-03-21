import styled from 'styled-components';

export const PostitWrapper = styled.div`
  position: relative;

  width: fit-content;
  height: fit-content;

  display: flex;
`;

export const PostItImage = styled.img`
  width: 70rem;
  height: fit-content;

  -webkit-user-drag: none;
  user-select: none;
`;

export const InnerContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  height: 100%;
  padding: 5.6rem 6.4rem;
`;

import styled from 'styled-components';

export const RegisterContainer = styled.div`
  position: relative;

  width: fit-content;
  height: fit-content;

  display: flex;
`;

export const RegisterPostIt = styled.img`
  width: 70rem;
  height: fit-content;

  -webkit-user-drag: none;
  user-select: none;
`;

export const RegisterContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  height: 100%;
  padding: 5.6rem 6.4rem;
`;

export const RegisterTitleSection = styled.section`
  width: fit-content;
  height: fit-content;
  margin-bottom: 2.8rem;

  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const RegisterTitle = styled.h2`
  ${({ theme }) => theme.fontStyles.Header3};
  color: ${({ theme }) => theme.colors.Grayscale[0]};
`;

export const TaskRegisterForm = styled.form`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const TaskRegisterInput = styled.input`
  flex-grow: 1;

  width: 100%;
  height: fit-content;
  padding: 1.4rem 1.8rem;

  border-radius: 32px;
  border: 1px solid ${({ theme }) => theme.colors.Grayscale[200]};

  ${({ theme }) => theme.fontStyles.Body5};
  color: ${({ theme }) => theme.colors.Grayscale[0]};
  background: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.colors.Grayscale[200]};
  }
`;

export const TaskRegisterButton = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 0 0.4rem;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  ${({ theme }) => theme.fontStyles.Body3};
  color: ${({ theme }) => theme.colors.Grayscale[0]};
`;

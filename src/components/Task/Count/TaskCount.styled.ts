import styled from 'styled-components';

export const TaskCountText = styled.span`
  ${({ theme }) => theme.fontStyles.Body2}
  color: ${({ theme }) => theme.colors.Grayscale[500]};
`;

export const TaskCountNumber = styled.span`
  color: ${({ theme }) => theme.colors.Signature.Red_500};
`;

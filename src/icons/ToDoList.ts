import styled from 'styled-components';

import postit from '@/assets/post-it.svg?react';
import sendIcon from '@/assets/send.svg?react';
import plusIcon from '@/assets/plus.svg?react';
import listIcon from '@/assets/list.svg?react';
import doneIcon from '@/assets/done.svg?react';
import checkboxIcon from '@/assets/checkbox.svg?react';
import checkIcon from '@/assets/check.svg?react';
import pencilIcon from '@/assets/pencil.svg?react';
import trashIcon from '@/assets/trash.svg?react';

export const PostitPaper = styled(postit)<{
  $paperColor?: string;
}>`
  width: 70rem;
  height: fit-content;

  #paper {
    fill: ${({ $paperColor, theme }) =>
      $paperColor || theme.colors.Grayscale[400]};
  }
`;

export const SendIcon = styled(sendIcon)`
  width: 4.8rem;
  height: fit-content;
`;

export const PlusIcon = styled(plusIcon)`
  width: 2.4rem;
  height: fit-content;
`;

export const ListIcon = styled(listIcon)`
  width: 5rem;
  height: fit-content;
`;

export const DoneIcon = styled(doneIcon)`
  width: 5.4rem;
  height: fit-content;
`;

export const CheckboxIcon = styled(checkboxIcon)`
  width: 4rem;
  height: fit-content;
`;

export const CheckIcon = styled(checkIcon)`
  position: absolute;
  top: 40%;
  left: 55%;
  transform: translate(-50%, -50%);

  width: 3.2rem;
  height: fit-content;
`;

export const PencilIcon = styled(pencilIcon)`
  width: 2.4rem;
  height: fit-content;
`;

export const TrashIcon = styled(trashIcon)`
  width: 2.4rem;
  height: fit-content;
`;

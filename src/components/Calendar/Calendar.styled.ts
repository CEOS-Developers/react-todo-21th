import styled, { css } from 'styled-components';

export const CalendarWrapper = styled.div`
  width: 93.6rem;
  height: 100%;
  padding: 6rem 4.8rem;

  border-radius: 8px;
  border: 3px solid ${({ theme }) => theme.colors.Grayscale[500]};
`;

// Calendar Title Section
export const CalendarTitleSection = styled.section`
  width: fit-content;
  height: fit-content;
  margin-bottom: 3.6rem;

  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

export const CalendarTitle = styled.h1`
  ${({ theme }) => theme.fontStyles.Header1};
  color: ${({ theme }) => theme.colors.Grayscale[500]};
`;

// Date Picker Section
export const DatePickerSection = styled.section`
  width: 100%;
  height: fit-content;
  margin-bottom: 3.6rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5.4rem;
`;

export const CurrentMonthYear = styled.a`
  ${({ theme }) => theme.fontStyles.Body1};
  color: ${({ theme }) => theme.colors.Grayscale[500]};
`;

const PreviousNextButton = styled.button`
  width: 3.6rem;
  height: 3.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  border: 1px solid rgba(228, 230, 231, 0.6);

  box-shadow: 0px 1px 5px -1px rgba(17, 12, 34, 0.1);

  &:hover {
    background-color: ${({ theme }) => theme.colors.Grayscale[50]};
  }

  transition: background-color 0.2s ease-out;
`;

export const PreviousMonthButton = styled(PreviousNextButton)`
  &:hover {
    transform: translateX(-1px);
  }

  transition: transform 0.12s ease-out;
`;

export const NextMonthButton = styled(PreviousNextButton)`
  &:hover {
    transform: translateX(1px);
  }

  transition: transform 0.12s ease-out;
`;

// Calendar & DayList Container
export const CalendarDayListContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

// DayList Section
export const DayListSection = styled.section`
  width: 100%;
  height: fit-content;
  padding: 0.8rem 0;
`;

export const DayList = styled.ul`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
`;

export const DayListItem = styled.li`
  flex: 1;

  width: 100%;
  height: fit-content;
  text-align: center;

  ${({ theme }) => theme.fontStyles.Body4};
  color: ${({ theme }) => theme.colors.Grayscale[300]};
`;

// Calendar Section
export const CalendarGridSection = styled.section`
  width: 100%;
  height: fit-content;

  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.Grayscale[100]};
`;

export const CalendarGrid = styled.ul`
  width: 100%;
  height: fit-content;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto;
`;

export const CalendarGridItem = styled.li`
  flex: 1;

  width: 100%;
  height: fit-content;
`;

export const CalendarGridItemLink = styled.a`
  width: 100%;

  aspect-ratio: 1 / 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;

export const DayTextBox = styled.div<{
  $isSelected: boolean;
  $isCurrentMonthDay: boolean;
}>`
  position: relative;

  ${({ theme }) => theme.fontStyles.Header2}
  color: ${({ $isSelected, $isCurrentMonthDay, theme }) =>
    $isSelected
      ? theme.colors.Grayscale[0]
      : $isCurrentMonthDay
        ? theme.colors.Grayscale[500]
        : theme.colors.Grayscale[300]};

  &::before {
    content: ${({ $isSelected }) => ($isSelected ? '""' : 'none')};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    width: 5rem;
    height: 5rem;
    border-radius: 16px;
    background: ${({ theme }) => theme.colors.Signature.Red_500};
  }
`;

// Logged (UnLogged) Circle
const Circle = css`
  width: 4px;
  height: 4px;
  border-radius: 50%;
`;

export const LoggedCircle = styled.div`
  ${Circle};
  background: ${({ theme }) => theme.colors.Signature.Red_500};
`;

export const UnLoggedCircle = styled.div`
  ${Circle};
  background: ${({ theme }) => theme.colors.Grayscale[100]};
`;

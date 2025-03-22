// CalenderStyled.tsx
import styled from "styled-components";
import { theme } from "../../assets/theme";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const CalenderModal = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

export const CalenderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h2 {
    font-size: 1.2rem;
    color: ${theme.text};
  }

  .month-nav {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    button {
      background: none;
      border: none;
      font-size: 1.1rem;
      color: ${theme.subText};
      cursor: pointer;
    }
  }

  > button {
    background: none;
    border: none;
    font-size: 0.9rem;
    color: ${theme.subText};
    cursor: pointer;
  }
`;

export const WeekRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 10px;
  text-align: center;
  font-weight: 500;
  color: ${theme.text};
`;

export const WeekDay = styled.div`
  font-size: 0.85rem;
  color: ${theme.text};
`;

export const CalenderGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
`;

export const DayBox = styled.div`
  background-color: #f1f5fb;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  font-size: 0.9rem;
  color: ${theme.text};
  min-height: 60px;
  cursor: pointer;

  &.today {
    border: 2px solid "#255a9b";
    font-weight: bold;
  }

  .day-number {
    font-weight: bold;
    font-size: 1rem;
    display: block;
    margin-bottom: 6px;
  }

  .todo-count {
    font-size: 0.8rem;
    color: ${theme.subText};
  }
`;

export const TodoListForDate = styled.ul`
  margin-top: 16px;
  list-style: none;
  padding: 0;
  p {
    font-size: 0.9rem;
    color: ${theme.text};
  }

  li {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 0.9rem;
    color: ${theme.text};

    input[type="checkbox"] {
      accent-color: "#255a9b";
    }
  }
`;
export const TodoText = styled.span<{ isComplete: boolean }>`
  text-decoration: ${(props) => (props.isComplete ? "line-through" : "none")};
`;

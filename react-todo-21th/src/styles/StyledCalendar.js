import styled from "styled-components";

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  max-width: 70rem;
  margin: 0 auto;
  background: #f9f9f9;
  border: 0.1rem solid #ddd;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0.4rem 0.6rem rgba(0, 0, 0, 0.1);
`;

export const CalendarHeader = styled.div`
  background: #4caf50;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

export const CalendarButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
`;

export const CalendarDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-weight: bold;
  color: #4caf50;
  padding: 1rem;
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
  padding: 1rem;
`;

export const CalendarCell = styled.button`
  background: ${({ isToday }) => (isToday ? "#f2f8eb" : "white")};
  color: ${({ isToday }) => (isToday ? "#333" : "black")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  aspect-ratio: 1 / 1;
  border: 0.1rem solid #ddd;
  border-radius: 0.3rem;
  font-size: 1rem;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    background: #f1f1f1;
    border-color: #4caf50;
  }
`;

export const DateNumber = styled.span`
  font-weight: bold;
  margin-bottom: 0.25rem;
  color: ${({ isToday }) => (isToday ? "#d32f2f" : "black")};
`;

export const TodoPreview = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.85rem;
  max-height: 100%;
  overflow: hidden;
  padding: 0.25rem;
  gap: 0.2rem;
`;

export const TodoUncompleted = styled.div`
  background: #e0e0e0;
  color: #333;
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
  width: 90%;
  text-align: center;
  margin: 1px 0;
  font-size: 0.75rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TodoCompleted = styled.div`
  background: #4caf50;
  color: white;
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
  width: 90%;
  text-align: center;
  margin: 1px 0;
  font-size: 0.75rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

import styled from "styled-components";

const CalendarDate = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1rem;
`;
const HighlightDate = styled.div<{ haveTodo: boolean }>`
  font-size: 1rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  width: 30px;
  white-space: nowrap;
  ${(props) =>
    props.haveTodo
      ? ` box-shadow: inset 0 -8px 0 hsla(31, 100.00%, 50.00%, 0.50)`
      : ``};
`;
const CountMessage = styled.div`
  font-size: 0.8rem;
  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
  margin-top: 2px;
  white-space: nowrap;
`;
const CompleteStamp = styled.img`
  width: 60%;
  margin: 5px;
`;
const MessageContainer = styled.div`
  font-size: 1rem;
  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
  white-space: nowrap;
  color: #505050;
  text-align: right;
  box-shadow: inset 0 -8px 0 hsla(52, 100%, 50%, 0.5);
  margin-top: 3px;
`;
const TodoCount = styled.div`
  font-size: 15px;
  color: gray;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DateContainer = styled.div<{ condition: boolean }>`
  box-sizing: border-box;
  width: calc(100% / 7);
  padding: 7px;
  text-align: right;
  height: 90px;
  border: 0.5px solid #000;
  @media (max-width: 768px) {
    padding: 5px;
    height: 70px;
  }
  &:nth-child(7n + 1) {
    color: red;
  }
  &:nth-child(7n) {
    color: rgb(68, 0, 255);
  }
  ${(props) => (props.condition ? `color:rgb(222, 222, 222) !important;` : ``)}
`;
const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  width: 70%;
  @media (max-width: 768px) {
    width: 90%;
  }
  margin: 50px;
  margin-top: 0px;
`;
const Title = styled.div`
  margin-bottom: 20px;
  font-size: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
const Today = styled.span`
  background: rgb(255, 41, 41);
  white-space: nowrap;
  color: white;
  padding: 3px 5px;
  font-size: 0.9rem;
  border-radius: 80%;
  cursor: pointer;
`;
const CalendarDays = styled.div`
  display: flex;
`;
const DayContainer = styled.div`
  width: calc(100% / 7);
  font-size: 1.1rem;
  &:nth-child(7n + 1) {
    color: red;
  }
  &:nth-child(7n) {
    color: rgb(68, 0, 255);
  }
`;
const CalendarDates = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export {
  CalendarDate,
  HighlightDate,
  CountMessage,
  CompleteStamp,
  MessageContainer,
  TodoCount,
  DateContainer,
  CalendarContainer,
  Title,
  Today,
  CalendarDays,
  DayContainer,
  CalendarDates,
};

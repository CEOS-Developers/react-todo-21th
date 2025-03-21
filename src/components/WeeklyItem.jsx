import styled from 'styled-components'
import ClickableStyle from '../styles/ClickableStyle'

const WeeklyItem = ({ day, date, status, onClick }) => {
  const [finishedTodo, totalTodo] = status
  return (
    <GridDiv onClick={onClick}>
      <DayText>{day}</DayText>
      <DateText>{date}</DateText>
      <StatusText $status={finishedTodo === totalTodo}>
        {`${finishedTodo}/${totalTodo}`}
      </StatusText>
    </GridDiv>
  )
}

const DayText = styled.div`
  color: ${({ theme }) => theme.colors.darker};
`

const DateText = styled.div`
  color: ${({ theme }) => theme.colors.textGray};
`

const StatusText = styled.div`
  text-align: center;
  color: ${({ theme, $status }) =>
    $status ? theme.colors.lightStroke : theme.colors.point};
`

const GridDiv = styled.div`
  ${ClickableStyle}
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;

  padding: 10px 5px;
`
export default WeeklyItem

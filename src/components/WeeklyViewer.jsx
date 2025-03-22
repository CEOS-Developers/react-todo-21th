import { useContext } from 'react'
import { TodoDispatchContext, TodoStateContext } from '../App'
import styled from 'styled-components'
import WeeklyItem from './WeeklyItem'
import { getWeeklyData } from '../utils/weekly'
import { DAY } from '../utils/constant'

const WeeklyViewer = () => {
  const { todos, pivotDate } = useContext(TodoStateContext)
  const { setPivotDate } = useContext(TodoDispatchContext)
  const weekDate = getWeeklyData(pivotDate)

  let finishedTasks = 0
  let totalTasks = 0

  /* 완료todo/전체todo 표시를 위한 개수 */
  const getTodoStatus = (date) => {
    const data = todos[date] || []
    const todoCount = data.length
    totalTasks += todoCount

    /* todo가 없다면 */
    if (!todoCount) return [0, 0]

    /* todo가 있다면 */
    const finishedTodoCount = data.filter(
      (todo) => todo.isFinished === true
    ).length
    finishedTasks += finishedTodoCount
    return [finishedTodoCount, todoCount]
  }

  const onClickWeeklyItem = (date) => {
    setPivotDate(date)
  }

  return (
    <FlexContainerColumn>
      {(weekDate || []).map((date, idx) => (
        <WeeklyItem
          onClick={() => onClickWeeklyItem(date)}
          key={date}
          day={DAY[idx]}
          date={date.slice(-2)}
          status={getTodoStatus(date)}></WeeklyItem>
      ))}
      <TotalStatus>
        {`total ${finishedTasks}/${totalTasks} (${
          finishedTasks === totalTasks
            ? '100.0'
            : ((finishedTasks / totalTasks) * 100).toFixed(2)
        }%)`}
      </TotalStatus>
    </FlexContainerColumn>
  )
}

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`
const TotalStatus = styled.div`
  color: ${(props) => props.theme.colors.darker};
  text-align: end;
  padding-top: 4px;
`
export default WeeklyViewer

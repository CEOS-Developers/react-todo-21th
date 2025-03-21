import React, { useContext } from 'react'
import { HeadTitle, SubTitle } from '../styles/Title'
import { TodoDispatchContext, TodoStateContext } from '../App'
import { getWeekNum } from '../utils/weekly'

const WeeklyContentHeader = () => {
  const { pivotDate } = useContext(TodoStateContext)
  const dateObj = new Date(pivotDate)
  const [month, week] = getWeekNum(dateObj)

  const { onClickDate } = useContext(TodoDispatchContext)
  return (
    <div>
      <HeadTitle>Weekly Check</HeadTitle>
      <SubTitle $clickable={true} onClick={onClickDate}>
        {`${dateObj.getFullYear()}년 ${month}월 ${week}째 주`}
      </SubTitle>
    </div>
  )
}

export default WeeklyContentHeader

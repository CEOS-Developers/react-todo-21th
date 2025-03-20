import React, { useContext } from 'react'
import { TodoDispatchContext, TodoStateContext } from '../App'
import { useTheme } from 'styled-components'

import { HeadTitle, SubTitle } from '../styles/Title'
import FlexContainerRow from '../styles/FlexContainerRow'

import getFinishedTodoCount from '../utils/getFinishedTodoCount'

const DailyContentHeader = () => {
  const theme = useTheme()

  const { pivotDate, todos } = useContext(TodoStateContext)
  const dateObj = new Date(pivotDate)
  const [day, month, date, year] = dateObj.toString().split(' ')

  const dailyTodos = todos[pivotDate] || []
  const finishedTodosCount = getFinishedTodoCount(dailyTodos)
  const { onClickDate } = useContext(TodoDispatchContext)

  return (
    <div>
      <SubTitle clickable="true" onClick={onClickDate}>
        {year}
      </SubTitle>
      <FlexContainerRow>
        <HeadTitle clickable="true" onClick={onClickDate}>
          {`${month} ${date} ${day}`}
        </HeadTitle>
        <HeadTitle
          style={{
            color: theme.colors.point,
          }}>
          {`${finishedTodosCount}/${dailyTodos.length}`}
        </HeadTitle>
      </FlexContainerRow>
    </div>
  )
}

export default DailyContentHeader

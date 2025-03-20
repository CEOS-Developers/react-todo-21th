import React, { useContext } from 'react'
import { HeadTitle, SubTitle } from '../styles/Title'
import { useTheme } from 'styled-components'
import { TodoStateContext } from '../App'
import FlexContainerRow from '../styles/FlexContainerRow'
import getFinishedTodoCount from '../utils/getFinishedTodoCount'

const DailyContentHeader = () => {
  const theme = useTheme()

  const { pivotDate, todos } = useContext(TodoStateContext)
  const dateObj = new Date(pivotDate)
  const [day, month, date, year] = dateObj.toString().split(' ')

  const dailyTodos = todos[pivotDate]
  const finishedTodosCount = getFinishedTodoCount(dailyTodos)

  return (
    <div>
      <SubTitle>{year}</SubTitle>
      <FlexContainerRow>
        <HeadTitle>{`${month} ${date} ${day}`}</HeadTitle>
        <HeadTitle
          style={{
            color: theme.colors.point,
          }}>{`${finishedTodosCount}/${dailyTodos.length}`}</HeadTitle>
      </FlexContainerRow>
    </div>
  )
}

export default DailyContentHeader

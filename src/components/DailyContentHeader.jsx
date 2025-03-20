import React, { useContext } from 'react'
import { HeadTitle, SubTitle } from '../styles/Title'
import { useTheme } from 'styled-components'
import { TodoStateContext } from '../App'
import FlexContainerRow from '../styles/FlexContainerRow'

const DailyContentHeader = () => {
  const theme = useTheme()

  const { pivotDate } = useContext(TodoStateContext)
  const dateObj = new Date(pivotDate)
  const [day, month, date, year] = dateObj.toString().split(' ')

  return (
    <div>
      <SubTitle>{year}</SubTitle>
      <FlexContainerRow>
        <HeadTitle>{`${month} ${date} ${day}`}</HeadTitle>
        <HeadTitle style={{ color: theme.colors.point }}>0/0</HeadTitle>
      </FlexContainerRow>
    </div>
  )
}

export default DailyContentHeader

import React from 'react'
import { X, CircleDashed, CircleCheckBig } from 'lucide-react'
import Icon from '../styles/Icon'
import styled, { useTheme } from 'styled-components'
import ClickableStyle from '../styles/ClickableStyle'

const StyledDiv = styled.div`
  ${ClickableStyle}
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 3px;
  border-radius: 10px;
`

const MainContent = styled.div`
  flex-grow: 1;
`

const TodoItem = ({ content, isFinished }) => {
  const theme = useTheme()
  return (
    <StyledDiv>
      {isFinished ? (
        <Icon color={theme.colors.point}>
          <CircleCheckBig />
        </Icon>
      ) : (
        <Icon color={theme.colors.darker}>
          <CircleDashed />
        </Icon>
      )}
      <MainContent>{content}</MainContent>
      <Icon color={theme.colors.darkStroke}>
        <X />
      </Icon>
    </StyledDiv>
  )
}

export default TodoItem

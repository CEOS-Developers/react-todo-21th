import React, { useContext } from 'react'
import { X, CircleDashed, CircleCheckBig } from 'lucide-react'
import Icon from '../styles/Icon'
import styled, { css, useTheme } from 'styled-components'
import ClickableStyle from '../styles/ClickableStyle'
import { TodoDispatchContext } from '../App'

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

  color: ${({ isFinished, theme }) => (isFinished ? theme.colors.lightStroke : 'black')};
  text-decoration: ${({ isFinished }) => (isFinished ? 'line-through' : 'none')};
`

const TodoItem = ({ id, content, isFinished }) => {
  const theme = useTheme()
  const { onDelete, onUpdateStatus } = useContext(TodoDispatchContext)
  const onClickCheckboxButton = () => {
    onUpdateStatus(id)
  }
  const onClickDeleteButton = () => {
    onDelete(id)
  }
  return (
    <StyledDiv>
      {isFinished ? (
        <Icon onClick={onClickCheckboxButton} color={theme.colors.point}>
          <CircleCheckBig />
        </Icon>
      ) : (
        <Icon onClick={onClickCheckboxButton} color={theme.colors.darker}>
          <CircleDashed />
        </Icon>
      )}
      <MainContent isFinished={isFinished ? 'true' : ''}>{content}</MainContent>
      <Icon onClick={onClickDeleteButton} color={theme.colors.darkStroke}>
        <X />
      </Icon>
    </StyledDiv>
  )
}

export default TodoItem

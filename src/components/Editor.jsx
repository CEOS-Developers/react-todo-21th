import React, { useContext, useState } from 'react'
import { TodoDispatchContext } from '../App'
import styled from 'styled-components'

import TextInput from '../styles/TextInput'
import CircleButton from '../styles/CircleButton'
import { Plus } from 'lucide-react'

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`

const Editor = () => {
  const [todo, setTodo] = useState('')
  const { onCreate } = useContext(TodoDispatchContext)

  const onChangeTodoInput = (e) => {
    setTodo(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.nativeEvent.isComposing) return
    onSubmitTodo()
  }

  const onSubmitTodo = () => {
    if (todo.trim()) onCreate(new Date().getTime(), todo)
    setTodo('')
  }

  return (
    <StyledDiv>
      <TextInput
        value={todo}
        onChange={onChangeTodoInput}
        onKeyDown={handleKeyDown}
        placeholder="무엇을 하고 싶은가요?"
      />
      <CircleButton onClick={onSubmitTodo}>
        <Plus />
      </CircleButton>
    </StyledDiv>
  )
}

export default Editor

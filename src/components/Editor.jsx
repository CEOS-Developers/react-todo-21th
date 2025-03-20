import React, { useContext, useState } from 'react'
import { TodoDispatchContext } from '../App'

import TextInput from '../styles/TextInput'
import CircleButton from '../styles/CircleButton'
import { Plus } from 'lucide-react'
import FlexContainerRow from '../styles/FlexContainerRow'

const Editor = () => {
  const [todo, setTodo] = useState('')
  const { onCreate } = useContext(TodoDispatchContext)

  const onChangeTodoInput = (e) => {
    setTodo(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.nativeEvent.isComposing) return
    if (e.key === 'Enter') onSubmitTodo()
  }

  const onSubmitTodo = () => {
    if (todo.trim()) onCreate(new Date().getTime(), todo)
    setTodo('')
  }

  return (
    <FlexContainerRow>
      <TextInput
        value={todo}
        onChange={onChangeTodoInput}
        onKeyDown={handleKeyDown}
        placeholder="무엇을 하고 싶은가요?"
      />
      <CircleButton onClick={onSubmitTodo}>
        <Plus />
      </CircleButton>
    </FlexContainerRow>
  )
}

export default Editor

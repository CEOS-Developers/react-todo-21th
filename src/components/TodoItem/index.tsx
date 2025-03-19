import { useState } from 'react';
import type { TodoItemProps } from './dto';
import { Button, Checkbox, TodoContent, TodoItemLayout } from './style';

export default function TodoItem({ id, isDone, content, onChange, onClickDeleteButton }: TodoItemProps) {
	const [isExpended, setIsExpended] = useState(false);
	const todoId = String(id);

	return (
		<TodoItemLayout>
			<Checkbox onChange={onChange} checked={isDone} type="checkbox" id={todoId} />
			<TodoContent
				htmlFor={todoId}
				$isDone={isDone}
				$isHovered={isExpended}
				onMouseEnter={() => {
					setIsExpended(true);
				}}
				onMouseLeave={() => {
					setTimeout(() => setIsExpended(false), 700);
				}}
			>
				{content}
			</TodoContent>
			<Button onClick={() => onClickDeleteButton(todoId)}>삭제</Button>
		</TodoItemLayout>
	);
}

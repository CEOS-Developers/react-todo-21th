import { useCallback } from 'react';
import type { TodoItemProps } from './dto';
import { Button, Checkbox, TodoContent, TodoItemLayout } from './style';

export default function TodoItem({ id, isDone, content, onChange, onClickDeleteButton }: TodoItemProps) {
	const todoId = String(id);
	const handleDeleteButtonClick = useCallback(() => onClickDeleteButton(todoId), []);

	return (
		<TodoItemLayout>
			<Checkbox onChange={onChange} checked={isDone} type="checkbox" id={todoId} />
			<TodoContent htmlFor={todoId} $isDone={isDone}>
				{content}
			</TodoContent>
			<Button onClick={handleDeleteButtonClick}>삭제</Button>
		</TodoItemLayout>
	);
}

import type { TodoItemProps } from './dto';
import { Button, Checkbox, TodoContent, TodoItemLayout } from './style';

export default function TodoItem({ id, isDone, content, onChange, onClickDeleteButton }: TodoItemProps) {
	const todoId = String(id);

	return (
		<TodoItemLayout>
			<Checkbox onChange={onChange} checked={isDone} type="checkbox" id={todoId} />
			<TodoContent htmlFor={todoId} $isDone={false}>
				{content}
			</TodoContent>
			<Button onClick={() => onClickDeleteButton(todoId)}>삭제</Button>
		</TodoItemLayout>
	);
}

import { TodoItemProps } from './dto';
import { Button, Checkbox, TodoContent, TodoItemLayout } from './style';

export default function TodoItem({ id, isDone, content, onChange }: TodoItemProps) {
	const todoId = String(id);
	return (
		<TodoItemLayout>
			<Checkbox onChange={onChange} checked={isDone} type="checkbox" id={todoId} />
			<TodoContent htmlFor={todoId} $isDone={false}>
				{content}
			</TodoContent>
			<Button>삭제</Button>
		</TodoItemLayout>
	);
}

import { TodoItemProps } from './dto';
import { Button, Checkbox, TodoContent, TodoItemLayout } from './style';

export default function TodoItem({ isDone, content }: TodoItemProps) {
	return (
		<TodoItemLayout>
			<Checkbox checked={isDone} type="checkbox" />
			<TodoContent $isDone={false}>{content}</TodoContent>
			<Button>삭제</Button>
		</TodoItemLayout>
	);
}

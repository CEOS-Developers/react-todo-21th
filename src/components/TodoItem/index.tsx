import { Button, Checkbox, TodoContent, TodoItemLayout } from './style';

export default function TodoItem() {
	return (
		<TodoItemLayout>
			<Checkbox type="checkbox" />
			<TodoContent $isDone={false}>가나다라</TodoContent>
			<Button>삭제</Button>
		</TodoItemLayout>
	);
}

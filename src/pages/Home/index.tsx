import TodoItem from '../../components/TodoItem';
import { Button, Header, Side, Title, TodoContainer, TodoInput, TodoInputBox, TodoList, TodoWrapper } from './style';

export default function Home() {
	return (
		<TodoWrapper>
			<Header>
				<Title>To Do List</Title>
			</Header>

			<TodoContainer>
				<div>
					<TodoInputBox>
						<TodoInput />
						<Button>추가</Button>
					</TodoInputBox>

					<TodoList>
						{[0, 1, 2].map((i) => (
							<TodoItem key={i} />
						))}
					</TodoList>
				</div>
				<Side />
			</TodoContainer>
		</TodoWrapper>
	);
}

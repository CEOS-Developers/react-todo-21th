import {
	Button,
	Checkbox,
	Header,
	Side,
	Title,
	TodoContainer,
	TodoContent,
	TodoInput,
	TodoInputBox,
	TodoItem,
	TodoList,
	TodoWrapper,
} from './style';

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
						<TodoItem>
							<Checkbox type="checkbox" />
							<TodoContent $isDone={false}>가나다라</TodoContent>
							<Button>삭제</Button>
						</TodoItem>
						<TodoItem>
							<Checkbox type="checkbox" />
							<TodoContent $isDone={false}>가나다라</TodoContent>
							<Button>삭제</Button>
						</TodoItem>
						<TodoItem>
							<Checkbox type="checkbox" />
							<TodoContent $isDone={false}>가나다라</TodoContent>
							<Button>삭제</Button>
						</TodoItem>
					</TodoList>
				</div>

				<Side />
			</TodoContainer>
		</TodoWrapper>
	);
}

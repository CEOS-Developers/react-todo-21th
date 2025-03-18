import { ChangeEvent, useEffect, useState } from 'react';
import TodoItem from '../../components/TodoItem';
import { Button, Date, Header, Title, TodoContainer, TodoInput, TodoInputBox, TodoList, TodoWrapper } from './style';
import { TodoDto } from './dto';
import Grass from '../../components/Grass';
import { formattedDate } from '../../utils/formattedDate';
import { saveTodos } from '../../utils/saveTodos';
import { loadTodayTodos } from '../../utils/loadTodayTodos';

export default function Home() {
	const [allTodos, setAllTodos] = useState<TodoDto[]>([]);
	const [todo, setTodo] = useState('');

	const totalTodoCount = allTodos.length;
	const doneTodoCount = allTodos.filter((todo) => todo.isDone).length;
	const doneTodoRatio = `(${doneTodoCount}/${totalTodoCount})`;

	const handleTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTodo(e.target.value);
	};

	const handleAppendButtonClick = () => {
		if (todo.trim()) {
			const id = allTodos.length ? allTodos[allTodos.length - 1].id + 1 : 0;
			const newTodo: TodoDto = {
				id,
				date: formattedDate,
				isDone: false,
				content: todo,
			};
			setAllTodos([...allTodos, newTodo]);
			saveTodos([...allTodos, newTodo]);
			setTodo('');
		}
	};

	const handleEnterKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
			handleAppendButtonClick();
		}
	};

	const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
		const updatedAllTodos = allTodos.map((todo) => {
			if (String(todo.id) === e.target.id) {
				return { ...todo, isDone: e.target.checked };
			}
			return todo;
		});

		setAllTodos(updatedAllTodos);
		saveTodos(updatedAllTodos);
	};

	const handleDeleteButtonClick = (id: string) => {
		const updatedAllTodos = allTodos.filter((todo) => String(todo.id) !== id);
		setAllTodos(updatedAllTodos);
	};

	useEffect(() => {
		const loadedTodos = loadTodayTodos();
		if (loadedTodos.length) {
			setAllTodos(loadedTodos);
		}
	}, []);

	return (
		<TodoWrapper>
			<Header>
				<Title>To Do List {doneTodoRatio}</Title>
				<Date>{formattedDate}</Date>
			</Header>

			<TodoContainer>
				<div>
					<TodoInputBox>
						<TodoInput
							value={todo}
							onChange={handleTodoChange}
							onKeyDown={handleEnterKeyDown}
							placeholder="할 일을 입력하세요..."
						/>
						<Button disabled={!todo} onClick={handleAppendButtonClick}>
							추가
						</Button>
					</TodoInputBox>

					<TodoList>
						{allTodos.map((todo) => (
							<TodoItem
								key={todo.id}
								onChange={handleCheckboxChange}
								onClickDeleteButton={handleDeleteButtonClick}
								{...todo}
							/>
						))}
					</TodoList>
				</div>
				<Grass />
			</TodoContainer>
		</TodoWrapper>
	);
}

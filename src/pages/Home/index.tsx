import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import TodoItem from '@/components/TodoItem';
import Grass from '@/components/Grass';
import { saveTodos } from '@/utils/saveTodos';
import { loadTodayTodos } from '@/utils/loadTodayTodos';
import { formatDate } from '@/utils/formatDate';

import type { TodoDto } from './dto';
import { Button, Today, Header, Title, TodoContainer, TodoInput, TodoInputBox, TodoWrapper } from './style';

export default function Home() {
	const [allTodos, setAllTodos] = useState<TodoDto[]>([]);
	const [todo, setTodo] = useState('');
	const formattedDate = formatDate(new Date());

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

	const handleCheckboxChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const updatedAllTodos = allTodos.map((todo) => {
				if (String(todo.id) === e.target.id) {
					return { ...todo, isDone: e.target.checked };
				}
				return todo;
			});

			setAllTodos(updatedAllTodos);
			saveTodos(updatedAllTodos);
		},
		[allTodos],
	);

	const handleDeleteButtonClick = useCallback(
		(id: string) => {
			const updatedAllTodos = allTodos.filter((todo) => String(todo.id) !== id);
			setAllTodos(updatedAllTodos);
			saveTodos(updatedAllTodos);
		},
		[allTodos],
	);

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
				<Today>{formattedDate}</Today>
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
						<Button disabled={!todo.trim()} onClick={handleAppendButtonClick}>
							추가
						</Button>
					</TodoInputBox>

					<ul>
						{allTodos.map((todo) => (
							<TodoItem
								key={todo.id}
								onChange={handleCheckboxChange}
								onClickDeleteButton={handleDeleteButtonClick}
								{...todo}
							/>
						))}
					</ul>
				</div>

				<Grass />
			</TodoContainer>
		</TodoWrapper>
	);
}

import styled from 'styled-components';

export const TodoWrapper = styled.div`
	background-color: white;
	width: 640px;
	height: 800px;
	padding: 40px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	border: 2px solid darkslategrey;
	box-shadow: 0 2px 8px 0 #00000020;
`;

export const Header = styled.header`
	width: 100%;
	border-bottom: 2px solid darkslategrey;
	padding-block: 10px;
`;

export const Title = styled.h1`
	font-size: 44px;
	margin-right: auto;
	margin-block: 2px;
	color: darkslategrey;
`;

export const TodoContainer = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 1fr 150px;
	overflow-y: scroll;
	scrollbar-width: none;
`;

export const Button = styled.button`
	width: 50px;
	height: 31px;
	margin-left: auto;

	border: none;
	border-radius: 2px;
	background-color: rgb(233, 233, 233);
`;

export const TodoInputBox = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 50px;
	padding: 5px 8px;
	box-sizing: border-box;
	border-bottom: 1.5px solid darkslategrey;
`;

export const TodoInput = styled.input`
	padding: 4px;
	border: none;
	outline: none;
	font-size: 1rem;
`;

export const TodoList = styled.ul`
	padding: 0 8px;
	color: black;
`;

export const TodoItem = styled.li`
	width: 100%;
	height: 31px;
	padding: 5px 0;
	border-bottom: 1.5px solid darkslategrey;

	display: grid;
	grid-template-columns: auto 1fr 50px;
	gap: 4px;
	align-items: center;
`;

export const Checkbox = styled.input`
	appearance: none;
	width: 16px;
	height: 16px;
	border: 1.5px solid darkslategrey;
	border-radius: 2px;
	cursor: pointer;

	&:checked {
		background-color: darkslategrey;
	}
`;

export const TodoContent = styled.label<{ $isDone: boolean }>`
	padding: 7px 0;
	cursor: pointer;
	white-space: nowrap;
	overflow: scroll;
	scrollbar-width: none;
	${({ $isDone }) => ($isDone ? 'color: rgb(150, 150, 150);	text-decoration: line-through;' : '')}
`;

export const Side = styled.div`
	border-left: 2px solid darkslategrey;
`;

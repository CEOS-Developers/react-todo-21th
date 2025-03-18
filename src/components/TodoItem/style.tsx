import styled from 'styled-components';
import { CommonButton } from '@/styles/CommonStyles';
import { memo } from 'react';

export const TodoItemLayout = styled.li`
	position: relative;

	width: 100%;
	padding: 5px 8px;
	border-bottom: 1.5px solid darkslategrey;

	display: grid;
	grid-template-columns: auto 1fr 50px;
	gap: 4px;
	align-items: center;

	transition: background-color 0.2s;

	&:hover {
		background-color: rgb(245, 245, 245);
	}
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

export const TodoContent = memo(styled.label<{ $isDone: boolean }>`
	padding: 7px 0;
	cursor: pointer;

	max-height: 30px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	transition: max-height 1.5s;

	${({ $isDone }) => ($isDone ? 'color: rgb(150, 150, 150);	text-decoration: line-through;' : '')}

	&:hover {
		white-space: pre-line;
		max-height: 300px;
	}
`);

export const Button = memo(styled(CommonButton)``);

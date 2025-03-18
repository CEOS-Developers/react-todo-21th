import styled from 'styled-components';
import { CommonButton } from '../../styles/CommonStyles';

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

export const Button = styled(CommonButton)``;

export const TodoList = styled.ul`
	padding: 0 8px;
	color: black;
`;

export const Side = styled.div`
	border-left: 2px solid darkslategrey;
`;

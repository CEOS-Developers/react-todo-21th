import styled from 'styled-components';
import { CommonButton } from '../../styles/CommonStyles';

export const TodoWrapper = styled.div`
	background-color: white;
	box-shadow: 0 0 10px 0 rgb(0, 0, 0, 0.1);

	width: 90%;
	max-width: 980px;
	height: 100vh;
	padding: 40px;
	margin: auto;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (max-width: 640px) {
		width: 100%;
		padding: 20px;
	}
`;

export const Header = styled.header`
	width: 100%;
	border-bottom: 2px solid darkslategrey;
	padding-block: 10px;
`;

export const Title = styled.h1`
	font-size: 44px;
	font-weight: 700;

	margin-right: auto;
	margin-block: 2px;
	color: darkslategrey;
`;

export const TodoContainer = styled.div`
	position: relative;

	width: 100%;
	height: 100%;
	display: grid;
	overflow-y: scroll;
	scrollbar-width: none;

	@media (min-width: 640px) {
		grid-template-columns: minmax(400px, 1fr) minmax(100px, 150px);
	}
`;

export const TodoInputBox = styled.div`
	position: sticky;
	top: 0;
	left: 0;

	width: 100%;
	display: grid;
	grid-template-columns: 1fr 50px;
	padding: 5px 8px;
	box-sizing: border-box;

	border-bottom: 1.5px solid darkslategrey;
	background-color: white;
`;

export const TodoInput = styled.input`
	padding: 4px;
	border: none;
	outline: none;
	font-size: 1rem;
	background-color: transparent;
`;

export const Button = styled(CommonButton)`
	&:disabled {
		cursor: default;
	}
`;

export const TodoList = styled.ul`
	padding: 0 8px;
	color: black;
`;

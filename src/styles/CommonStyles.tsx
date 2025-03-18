import styled from 'styled-components';

export const CommonButton = styled.button`
	width: 50px;
	height: 31px;
	margin-left: auto;

	border: none;
	border-radius: 2px;
	background-color: rgb(233, 233, 233);

	transition: background-color 0.2s;

	&:hover {
		background-color: rgb(245, 245, 245);
	}
`;

import styled from 'styled-components';

export const GrassWrapper = styled.div`
	border-left: 2px solid darkslategrey;
	padding: 8px;

	@media (max-width: 639px) {
		display: none;
	}
`;

export const GrassLayout = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-auto-rows: minmax(auto);
	gap: 4px;
	height: fit-content;
`;

export const GrassItem = styled.div`
	width: 100%;
	aspect-ratio: 1;
	margin: auto;
	background-color: rgb(233, 233, 233);
	border-radius: 2px;
`;

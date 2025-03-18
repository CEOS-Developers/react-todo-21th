import { GrassItem, GrassLayout, GrassWrapper } from './style';

export default function Grass() {
	return (
		<GrassWrapper>
			<GrassLayout>
				{[
					0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 119, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
					30,
				].map((i) => (
					<GrassItem key={i} />
				))}
			</GrassLayout>
		</GrassWrapper>
	);
}

import { createGrassCalendar } from '../../utils/createGrassCalendar';
import { GrassItem, GrassLayout, GrassWrapper } from './style';

export default function Grass() {
	const calendar = createGrassCalendar();

	return (
		<GrassWrapper>
			<GrassLayout>
				{calendar.map((date) => (
					<GrassItem title={date} key={date} />
				))}
			</GrassLayout>
		</GrassWrapper>
	);
}

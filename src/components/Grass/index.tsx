import { createGrassCalendar } from '@/utils/createGrassCalendar';
import { GrassItem, GrassLayout, GrassWrapper } from './style';
import { memo, useMemo } from 'react';

export default memo(function Grass() {
	const calendar = useMemo(() => createGrassCalendar(), []);

	return (
		<GrassWrapper>
			<GrassLayout>
				{calendar.map((date) => (
					<GrassItem $hasDoneTodo={date.hasDoneTodo} title={date.date} key={date.date} />
				))}
			</GrassLayout>
		</GrassWrapper>
	);
});

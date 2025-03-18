import { TodoDto } from '../pages/Home/dto';
import { createMonthlyCalendar } from './createGrassCalendar';
import { options } from './formattedDate';

export const loadAllTodos = (calendar: string[]) => {
	if (new Date().getDate() === 1) {
		removeThreeMonthsAgoTodos();
	}

	try {
		// 날짜(date)별 완료된 투두가 존재하는지 여부(hasDoneTodo)를 가지는 객체 배열 반환
		const loadedCalendar = calendar.map((date) => {
			const data = localStorage.getItem(date);
			const todos: TodoDto[] = JSON.parse(data || '[]');
			const hasDoneTodo =
				date === new Date().toLocaleDateString('ko-KR', options)
					? false
					: !!todos.filter((todo) => todo.isDone === true).length;

			return {
				date,
				hasDoneTodo,
			};
		});

		return loadedCalendar;
	} catch (e) {
		if (e instanceof DOMException && e.code === 22) {
			console.error('localStorage 용량 초과');
		} else {
			console.error('알 수 없는 오류:', e);
		}
	}
};

// 세 달 전 투두는 로컬스토리지에서 삭제
const removeThreeMonthsAgoTodos = () => {
	const threeMonthsAgo = new Date();
	threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 2);
	threeMonthsAgo.setDate(0);

	createMonthlyCalendar(threeMonthsAgo).forEach((date) => {
		localStorage.removeItem(date);
	});
};

import { formattedDate } from './formattedDate';

export const loadTodayTodos = () => {
	try {
		const data = localStorage.getItem(formattedDate);

		if (!data) {
			return [];
		} else {
			return JSON.parse(data);
		}
	} catch (e) {
		if (e instanceof DOMException && e.code === 22) {
			console.error('localStorage 용량 초과');
		} else {
			console.error('알 수 없는 오류:', e);
		}
	}
};

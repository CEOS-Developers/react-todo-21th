import { TodoDto } from '../pages/Home/dto';
import { formatDate } from './formatDate';

export const saveTodos = (todos: TodoDto[]) => {
	try {
		localStorage.setItem(formatDate(new Date()), JSON.stringify(todos));
	} catch (e) {
		if (e instanceof DOMException && e.code === 22) {
			console.error('localStorage 용량 초과');
		} else {
			console.error('알 수 없는 오류:', e);
		}
	}
};

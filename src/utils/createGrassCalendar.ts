import { options } from './formattedDate';
import { loadAllTodos } from './loadAllTodos';

// 두 달 전 1일부터 오늘까지의 날짜를 담은 배열 생성
export const createGrassCalendar = () => {
	const twoMonthsAgo = new Date();
	twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 1);
	twoMonthsAgo.setDate(0);

	const aMonthAgo = new Date();
	aMonthAgo.setDate(0);

	const today = new Date();

	const calendar = [
		...createMonthlyCalendar(twoMonthsAgo),
		...createMonthlyCalendar(aMonthAgo),
		...createMonthlyCalendar(today),
	];

	return loadAllTodos(calendar) || [];
};

// 당월 1일부터 마지막 날 또는 오늘까지의 날짜를 담은 배열 생성
export const createMonthlyCalendar = (date: Date) => {
	const year = date.getFullYear();
	const month = date.getMonth();
	const numberOfDays = date.getMonth() === new Date().getMonth() ? new Date().getDate() : date.getDate();

	return new Array(numberOfDays)
		.fill(null)
		.map((_, i) => new Date(year, month, i + 1).toLocaleDateString('ko-KR', options));
};

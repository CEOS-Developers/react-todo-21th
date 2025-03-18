import { options } from './formattedDate';

// 두 달 전 1일부터 오늘까지의 날짜를 담은 배열 생성
export const createGrassCalendar = () => {
	const twoMonthAgo = new Date();
	twoMonthAgo.setMonth(twoMonthAgo.getMonth() - 1);
	twoMonthAgo.setDate(0);

	const aMonthAgo = new Date();
	aMonthAgo.setDate(0);

	const today = new Date();

	const calendar = [
		...createMonthlyCalendar(twoMonthAgo),
		...createMonthlyCalendar(aMonthAgo),
		...createMonthlyCalendar(today),
	];

	return calendar;
};

// 한 달 치 날짜를 담은 배열 생성
export const createMonthlyCalendar = (date: Date) => {
	const year = date.getFullYear();
	const month = date.getMonth();
	const numberOfDays = date.getMonth() === new Date().getMonth() ? new Date().getDate() : date.getDate();

	return new Array(numberOfDays)
		.fill(null)
		.map((_, i) => new Date(year, month, i + 1).toLocaleDateString('ko-KR', options));
};

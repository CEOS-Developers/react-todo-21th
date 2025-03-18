const today = new Date();

export const options: Intl.DateTimeFormatOptions = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	weekday: 'long',
};

// header의 오늘 날짜
export const formattedDate = today.toLocaleDateString('ko-KR', options);

const options: Intl.DateTimeFormatOptions = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	weekday: 'long',
};

export const formatDate = (date: Date) => date.toLocaleDateString('ko-KR', options);

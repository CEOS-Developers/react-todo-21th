const options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
};

function formatDateKey(date: Date): string {
  return date.toLocaleDateString('ko-KR', options);
}

export default formatDateKey;

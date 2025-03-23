const options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

function formatDateKey(date: Date): string {
  return date.toLocaleDateString('ko-KR', options);
}

export default formatDateKey;

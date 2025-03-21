import formatDate from './formatDate'

/* 특정 일이 몇 째 주인지 계산하여 반환*/
const getWeekNum = (date) => {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1)
  const firstDayWeekday = firstDayOfMonth.getDay()
  const dayOfMonth = date.getDate()

  let month = date.getMonth() + 1
  let week = Math.ceil((dayOfMonth + firstDayWeekday) / 7)

  if (firstDayWeekday > 0 && firstDayWeekday < 5) return [month, week]

  week -= 1
  if (week > 0) return [month, week]

  const lastDayOfPrevMonth = new Date(date.getFullYear(), date.getMonth(), 0)
  return getWeekNum(lastDayOfPrevMonth)
}

/* 한 주의 YYYY-MM-DD 형식을 가진 날짜 배열 반환 */
const getWeeklyData = (pivotDate) => {
  const weekDate = []
  let dateObj = new Date(pivotDate)
  const curDay = dateObj.getDay()

  for (let i = curDay; i !== 0; i--) {
    dateObj.setDate(dateObj.getDate() - 1)
    weekDate.push(formatDate(dateObj))
  }
  weekDate.reverse()

  dateObj = new Date(pivotDate)
  for (let i = curDay; weekDate.length < 7; i++) {
    weekDate.push(formatDate(dateObj))
    dateObj.setDate(dateObj.getDate() + 1)
  }
  return weekDate
}

export { getWeekNum, getWeeklyData }

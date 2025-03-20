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

export { getWeekNum }

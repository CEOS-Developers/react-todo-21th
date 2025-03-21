export const formatDate = (date) => {
  const currentDate = new Date(date);
  
  // 로컬 시간대로 맞추기 위해 0시로 설정
  currentDate.setHours(0, 0, 0, 0);
  
  // 로컬 시간대에서 'yyyy-mm-dd' 형식으로 반환
  const formattedDate = currentDate.toLocaleDateString("en-CA"); // 'yyyy-mm-dd' 형식
  return formattedDate;
};

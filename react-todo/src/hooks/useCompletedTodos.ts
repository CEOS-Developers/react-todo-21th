import { useState, useEffect, useCallback } from 'react';
import { getFormattedDate, getWeekRange, getDayOfWeek } from '@/utils/dateUtils';

/* 주간 완료한 할 일 개수를 관리하는 커스텀 훅 */
const useCompletedTodos = () => {
  const [completedTodos, setCompletedTodos] = useState<{ [key: string]: number }>({});
  const [maxDays, setMaxDays] = useState<string[]>([]);

  /* 주간 완료된 할 일 개수 계산 */
  const calculateCompletedTodos = useCallback(() => {
    const { startOfWeek, endOfWeek } = getWeekRange(new Date());
    let weeklyData: { [key: string]: number } = {};

    for (let d = new Date(startOfWeek); d <= endOfWeek; d.setDate(d.getDate() + 1)) {
      const dateKey = getFormattedDate(d);
      const dayName = getDayOfWeek(d);
      const savedTodos = localStorage.getItem(dateKey);

      if (savedTodos) {
        const todos = JSON.parse(savedTodos);
        const completedCount = todos.filter((todo: { isCompleted: boolean }) => todo.isCompleted).length;
        weeklyData[dayName] = completedCount;
      } else {
        weeklyData[dayName] = 0;
      }
    }

    return weeklyData;
  }, []);

  /* 최대 완료 요일 찾기 */
  const getMaxDays = useCallback((weeklyData: { [key: string]: number }) => {
    let maxCount = Math.max(...Object.values(weeklyData));
    if (maxCount === 0) return []; // 모든 요일이 0개면 강조하지 않음

    return Object.entries(weeklyData)
      .filter(([_, count]) => count === maxCount)
      .map(([day]) => day);
  }, []);

  /* 데이터 업데이트 */
  const updateCompletedTodos = useCallback(() => {
    const weeklyData = calculateCompletedTodos();
    setCompletedTodos(weeklyData);
    setMaxDays(getMaxDays(weeklyData));
  }, [calculateCompletedTodos, getMaxDays]);

  /* 초기 데이터 설정 및 로컬 스토리지 변경 감지 */
  useEffect(() => {
    updateCompletedTodos();
    window.addEventListener('storage', updateCompletedTodos);
    return () => window.removeEventListener('storage', updateCompletedTodos);
  }, [updateCompletedTodos]);

  return { completedTodos, maxDays };
};

export default useCompletedTodos;

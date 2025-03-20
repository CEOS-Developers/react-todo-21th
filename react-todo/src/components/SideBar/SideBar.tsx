import { useState, useEffect } from 'react';
import * as S from './SideBar.Styled';
import ToggleButton from '@/components/ToggleButton/ToggleButton';
import { getFormattedDate, getWeekRange, getDayOfWeek } from '@/utils/dateUtils';

interface SideBarProps {
  onClose: () => void;
  toggleTheme: () => void;
  themeMode: 'light' | 'dark';
}

const SideBar = ({ onClose, toggleTheme, themeMode }: SideBarProps) => {
  const [completedTodos, setCompletedTodos] = useState<{ [key: string]: number }>({});
  const [maxDays, setMaxDays] = useState<string[]>([]);
  const today = new Date();
  const todayDay = getDayOfWeek(today);

  useEffect(() => {
    const updateCompletedTodos = () => {
      const { startOfWeek, endOfWeek } = getWeekRange(new Date());
      let weeklyData: { [key: string]: number } = {};
      let maxCount = 0;
      let maxDaysList: string[] = [];

      for (let d = new Date(startOfWeek); d <= endOfWeek; d.setDate(d.getDate() + 1)) {
        const dateKey = getFormattedDate(d);
        const dayName = getDayOfWeek(d);
        const savedTodos = localStorage.getItem(dateKey);

        if (savedTodos) {
          const todos = JSON.parse(savedTodos);
          const completedCount = todos.filter((todo: { isCompleted: boolean }) => todo.isCompleted).length;
          weeklyData[dayName] = completedCount;

          if (completedCount > maxCount) {
            maxCount = completedCount;
            maxDaysList = [dayName];
          } else if (completedCount === maxCount && maxCount !== 0) {
            maxDaysList.push(dayName);
          }
        } else {
          weeklyData[dayName] = 0;
        }
      }

      setCompletedTodos(weeklyData);

      // ✅ 최대 값이 0이 아닐 경우에만 maxDays 설정
      if (maxCount > 0) {
        setMaxDays(maxDaysList);
      } else {
        setMaxDays([]); // 모두 0개일 경우 색칠 제거
      }
    };

    updateCompletedTodos();

    window.addEventListener('storage', updateCompletedTodos);
    return () => {
      window.removeEventListener('storage', updateCompletedTodos);
    };
  }, []);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <S.Overlay onClick={handleOutsideClick}>
      <S.Container onClick={(e: any) => e.stopPropagation()}>
        <S.ButtonBox>
          <S.CloseButton onClick={onClose}>x</S.CloseButton>
          <ToggleButton isChecked={themeMode === 'dark'} onToggle={toggleTheme} />
        </S.ButtonBox>
        <S.StatsBox>
          <S.WeekText>Weekly Progress 📅</S.WeekText>
          {Object.entries(completedTodos).map(([day, count]) => (
            <S.DayStat key={day} $isMax={maxDays.includes(day)}>
              {day === todayDay ? `Today (${day})` : day} | {count}개 완료
            </S.DayStat>
          ))}
        </S.StatsBox>
      </S.Container>
    </S.Overlay>
  );
};

export default SideBar;

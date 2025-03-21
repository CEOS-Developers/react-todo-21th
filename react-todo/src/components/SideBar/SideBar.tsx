import { useState } from 'react';
import * as S from './SideBar.Styled';
import ToggleButton from '@/components/ToggleButton/ToggleButton';
import useCompletedTodos from '@/hooks/useCompletedTodos';
import { getDayOfWeek } from '@/utils/dateUtils';

interface SideBarProps {
  onClose: () => void;
  toggleTheme: () => void;
  themeMode: 'light' | 'dark';
}

const SideBar = ({ onClose, toggleTheme, themeMode }: SideBarProps) => {
  const { completedTodos, maxDays } = useCompletedTodos();
  const today = new Date();
  const todayDay = getDayOfWeek(today);

  const [isClosing, setIsClosing] = useState(false);

  // 닫기 애니메이션 후 언마운트
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) handleClose();
  };

  return (
    <S.Overlay onClick={handleOutsideClick}>
      <S.Container
        style={{
          animation: isClosing ? 'slideOut 0.3s ease forwards' : undefined,
        }}
        onClick={(e: any) => e.stopPropagation()}
      >
        <S.ButtonBox>
          <S.CloseButton onClick={handleClose}>x</S.CloseButton>
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

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

  /* 사이드바 바깥 클릭 시 닫기 */
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
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

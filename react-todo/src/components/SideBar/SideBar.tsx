import * as S from './SideBar.Styled';
import ToggleButton from '@/components/ToggleButton/ToggleButton';

interface SideBarProps {
  onClose: () => void;
  toggleTheme: () => void;
  themeMode: 'light' | 'dark';
}

const SideBar = ({ onClose, toggleTheme, themeMode }: SideBarProps) => {
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
      </S.Container>
    </S.Overlay>
  );
};

export default SideBar;

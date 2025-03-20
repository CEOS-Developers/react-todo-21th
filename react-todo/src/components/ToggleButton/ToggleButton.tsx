import * as S from './ToggleButton.Styled';

interface ToggleButtonProps {
  isChecked: boolean;
  onToggle: () => void;
}

const ToggleButton = ({ isChecked, onToggle }: ToggleButtonProps) => {
  return (
    <S.ToggleContainer>
      <S.ToggleLabel>
        <S.ToggleInput type="checkbox" checked={isChecked} onChange={onToggle} />
        <S.ToggleSlider />
      </S.ToggleLabel>
    </S.ToggleContainer>
  );
};

export default ToggleButton;

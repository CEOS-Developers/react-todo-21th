import * as S from './SideBar.Styled';

const SideBar = () => {
  return (
    <>
      <S.Container>
        <S.CloseButton>x</S.CloseButton>
        <S.ThemeButton>🌙</S.ThemeButton>
      </S.Container>
    </>
  );
};

export default SideBar;

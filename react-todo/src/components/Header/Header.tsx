import * as S from './Header.Styled';
import { useState } from 'react';
import SideBar from '@/components/SideBar/SideBar';

interface HeaderProps {
  themeMode: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header = ({ themeMode, toggleTheme }: HeaderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const goToHome = () => {
    window.location.reload();
  };

  return (
    <>
      <S.HeaderDiv>
        <S.Container>
          <S.HamburgerMenu onClick={toggleSidebar}>&#9776;</S.HamburgerMenu>
          <S.Title onClick={goToHome}>To Do</S.Title>
        </S.Container>
      </S.HeaderDiv>
      {isSidebarOpen && <SideBar onClose={toggleSidebar} toggleTheme={toggleTheme} themeMode={themeMode} />}
    </>
  );
};

export default Header;

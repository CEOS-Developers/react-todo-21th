import * as S from './Header.Styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from '@/components/SideBar/SideBar';

const Header = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <S.Container>
        <S.HamburgerMenu onClick={toggleSidebar}>&#9776;</S.HamburgerMenu>
        <S.Title
          onClick={() => {
            navigate('/');
          }}
        >
          To Do
        </S.Title>
      </S.Container>
      {isSidebarOpen && <SideBar />}
    </>
  );
};

export default Header;

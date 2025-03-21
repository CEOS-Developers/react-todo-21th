import styled from "styled-components";
import DarkMode from "@/assets/images/DarkMode.png";
import LightMode from "@/assets/images/LightMode.png";

const ThemeToggle = ({ onClick, theme }) => {
  return (
    <ToggleWrapper>
      <ToggleInput
        id="themeToggle"
        type="checkbox"
        checked={theme === "dark"}
        onChange={onClick}
      />
      <ToggleLabel htmlFor="themeToggle" />
    </ToggleWrapper>
  );
};

export default ThemeToggle;
const ToggleWrapper = styled.div`
  position: relative;
  display: inline-block;
  height: 1.875rem;
  width: 3.625rem;
`;

const ToggleInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  height: 1.875rem;
  width: 3.625rem;
  appearance: none;
  border-radius: 9999px;
  cursor: pointer;
  color: ${(props) => props.theme.mainText};
  background-color: ${(props) => props.theme.toggleBg};

  &:checked + label {
    transform: translateX(1.75rem);
    background-image: url(${DarkMode});
  }
`;

const ToggleLabel = styled.label`
  position: absolute;
  left: 0.125rem;
  top: 0.125rem;
  height: 1.625rem;
  width: 1.625rem;
  background-color: ${(props) => props.theme.toggle};
  transition: transform 0.3s;
  border-radius: 9999px;
  cursor: pointer;

  background-image: url(${LightMode});
  background-size: 70%;
  background-position: center;
  background-repeat: no-repeat;
`;

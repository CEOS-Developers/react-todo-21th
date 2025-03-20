import styled from 'styled-components'

const CircleButton = styled.button`
  border-radius: 100px;
  aspect-ratio: 1 / 1;

  width: 50px;
  color: white;
  background-color: ${(props) => props.theme.colors.darker};
  cursor: pointer;
  box-shadow: ${(props) => props.theme.shadow};
  border: 1px solid ${(props) => props.theme.colors.darker};
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.darker};
    background-color: white;
  }
`
export default CircleButton

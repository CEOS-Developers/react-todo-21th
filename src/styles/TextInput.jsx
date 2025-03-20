import styled from 'styled-components'

const TextInput = styled.input`
  width: 100%;
  padding: 12px;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightStroke};
  border-radius: 10px;

  &:hover {
    box-shadow: ${(props) => props.theme.shadow};
    border-bottom: 1px solid ${(props) => props.theme.colors.darker};
    outline: none;
  }

  &:focus {
    box-shadow: ${(props) => props.theme.shadow};
    border-bottom: 1px solid ${(props) => props.theme.colors.darker};
    outline: none;
  }
`

export default TextInput

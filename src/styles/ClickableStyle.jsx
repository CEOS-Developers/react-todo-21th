import { css } from 'styled-components'

const ClickableStyle = css`
  padding: 4px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: ${(props) => props.theme.shadow};
  }
`

export default ClickableStyle

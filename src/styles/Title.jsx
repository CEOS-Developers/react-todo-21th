import styled from 'styled-components'
import ClickableStyle from './ClickableStyle'

const HeadTitle = styled.h1`
  margin: 0;
  color: ${(props) => props.theme.colors.darker};
  font-weight: 600;

  ${(props) => props.$clickable && ClickableStyle}
`

const SubTitle = styled.h2`
  margin: 0;
  color: ${(props) => props.theme.colors.darker};
  font-weight: 600;
  font-size: 1rem;
  display: inline-block;

  ${(props) => props.$clickable && ClickableStyle};
`
export { HeadTitle, SubTitle }

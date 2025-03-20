import styled from 'styled-components'

const HeadTitle = styled.h1`
  margin: 0;
  color: ${(props) => props.theme.colors.darker};
  font-weight: 600;
`

const SubTitle = styled.h2`
  margin: 0;
  color: ${(props) => props.theme.colors.darker};
  font-weight: 600;
  font-size: 1rem;
`
export { HeadTitle, SubTitle }

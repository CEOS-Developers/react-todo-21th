import styled from 'styled-components'

const Container = styled.div`
  background-color: white;
  border-radius: 30px;
  box-shadow: ${(props) => props.theme.shadow};
  padding: 25px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`

export default Container

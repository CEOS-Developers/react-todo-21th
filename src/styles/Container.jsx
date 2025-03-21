import styled from 'styled-components'

const Container = styled.div`
  background-color: white;
  border-radius: 30px;
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 25px;
  width: ${({ width }) => (width ? width : 'auto')};
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;
`

export default Container

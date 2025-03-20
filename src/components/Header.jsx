import React from 'react'
import styled from 'styled-components'

const HeaderTitle = styled.h1`
  color: ${(props) => props.theme.colors.darkest};
  margin: 10px 10px;
  display: inline-block;
  font-family: ${(props) => props.theme.fonts.heading};
`

const Header = () => {
  return (
    <header>
      <a href="/">
        <HeaderTitle>Todo</HeaderTitle>
      </a>
    </header>
  )
}

export default Header

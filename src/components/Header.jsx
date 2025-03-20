import React from 'react'
import styled, { useTheme } from 'styled-components'

const Header = () => {
  const theme = useTheme()
  const HeaderTitle = styled.h1`
    color: ${theme.colors.darkest};
    margin: 10px 10px;
    display: inline-block;
  `

  return (
    <header>
      <a href="/">
        <HeaderTitle>Todo</HeaderTitle>
      </a>
    </header>
  )
}

export default Header

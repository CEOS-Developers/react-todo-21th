import React from "react";
import { StyledHeader } from "./HeaderStyles";

function Header({ title, onClick }) {
  return (
    <StyledHeader onClick={onClick} style={{ cursor: "pointer" }}>
      <h1>{title}</h1>
    </StyledHeader>
  );
}

export default Header;

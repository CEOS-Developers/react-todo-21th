import React from "react";

function Header({title, onClick}){
  return (
    <main>
      <header id="header" onClick={onClick} style={{cusor:'pointer'}}>
        <h1>{title}</h1>
      </header>
    </main>
  );
};

export default Header;

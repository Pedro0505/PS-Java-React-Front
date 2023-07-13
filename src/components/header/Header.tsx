import React from 'react';
import logo from '../../assets/logo.png';
import './style.css';

function Header() {
  return (
    <header className="main-page-header">
      <img
        src={logo}
        className="header-logo"
        alt="Imagem da logo do site, onde tem uma lupa e dentro da lupa uma imagem de um banco e do lado direito o nome Search.Bank"
      />
    </header>
  );
}

export default Header;

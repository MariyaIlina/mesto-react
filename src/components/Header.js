import React from 'react';
import logo from '../images/logo.svg'

function Header() {
  return (
    <header className="header page__header">
      <img src={logo} alt="логотип" className="header__logo" />
    </header>
  )
}

export default Header
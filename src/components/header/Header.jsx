// src/components/header/Header.jsx
import { useState } from 'react';
import './header.css';
import logo from "../../../public/images/logo.PNG"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} alt="logo" style={{width: 120}} />

        </div>

        {/* Desktop nav */}
        <nav className="header__nav desktop">
          <a href="#about">Обо мне</a>
          <a href="#projects">Проекты</a>
          <a href="#skills">Навыки</a>
          <a href="#contacts">Контакты</a>
        </nav>

        {/* Burger */}
        <div
          className={`burger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <a href="#about" onClick={closeMenu}>Обо мне</a>
        <a href="#projects" onClick={closeMenu}>Проекты</a>
        <a href="#skills" onClick={closeMenu}>Навыки</a>
        <a href="#contacts" onClick={closeMenu}>Контакты</a>
      </div>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;

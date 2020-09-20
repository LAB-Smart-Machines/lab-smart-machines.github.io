/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';

export default function MobileNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };
  const closeMenuHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Menu
      right
      onStateChange={(state) => handleStateChange(state)}
      isOpen={menuOpen}
    >
      <Link href="/">
        <a className="menu-item" onClick={closeMenuHandler}>
          INICIO
        </a>
      </Link>
      <Link href="/#proyectos">
        <a className="menu-item" onClick={closeMenuHandler}>
          PROYECTOS
        </a>
      </Link>
      <Link href="/miembros">
        <a className="menu-item">MIEMBROS</a>
      </Link>
      <Link href="/publicaciones">
        <a className="menu-item">PUBLICACIONES</a>
      </Link>
      <Link href="#contact">
        <a className="menu-item" onClick={closeMenuHandler}>
          CONTACTO
        </a>
      </Link>
    </Menu>
  );
}

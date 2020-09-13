import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';

const MobileNav = () => (
  <Menu right>
    <Link href="/">
      <a className="menu-item">INICIO</a>
    </Link>
    <Link href="/#proyectos">
      <a className="menu-item">PROYECTOS</a>
    </Link>
    <Link href="/miembros">
      <a className="menu-item">MIEMBROS</a>
    </Link>
    <Link href="/publicaciones">
      <a className="menu-item">PUBLICACIONES</a>
    </Link>
    <Link href="#contact">
      <a className="menu-item">CONTACTO</a>
    </Link>
  </Menu>
);

export default MobileNav;

const PostLink = (props) => (
  <li className="menu-item">
    <a href={`/proyecto?titulo=${props.github}`}>{props.titulo}</a>
  </li>
);

/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Link from 'next/link';

import sortDown from '../public/static/images/sort-down-solid.svg';
import PROYECTOS from '../PROYECTOS.json';
// usando data de json PROYECTOS

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };
  const closeMenuHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav-link w-nav-link">
      <Link href="/#proyectos">
        <a className="button-menu">PROYECTOS</a>
      </Link>

      <img
        className="menu-img"
        src={sortDown}
        alt="menu"
        sizes="(max-width: 71px) 50px, 71px"
        width="16"
        onClick={closeMenuHandler}
        role="button"
      />
      {menuOpen ? (
        <ul className="ul-dropdown">
          {PROYECTOS.proyecto.map((proyecto, i) => (
            <PostLink
              titulo={proyecto.titulo}
              github={proyecto.github}
              key={i}
            />
          ))}
        </ul>
      ) : null}
    </div>
  );
}

// https://nextjs.org/learn/basics/create-dynamic-pages/passing-data
const PostLink = (props) => (
  <li className="li-dropdown">
    <a href={`/proyecto?titulo=${props.github}`}>{props.titulo}</a>
  </li>
);

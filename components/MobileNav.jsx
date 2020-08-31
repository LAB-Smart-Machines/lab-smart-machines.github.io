import React from 'react';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';

const StyledMobileNav = styled.div`
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 36px;
    top: 25px;
  }

  .right .bm-burger-button {
    left: initial;
    right: 36px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #f37777;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #a90000;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 33px;
    width: 35px;
    transform: scale(1.5);
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #000;
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background-image: linear-gradient(#f37777, rgba(239, 174, 175, 0.85));
    padding: 2.5em 1.5em 0;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }

  .menu-item {
    text-align: left;
    text-decoration: none;
    text-transform: uppercase;
    padding: 1rem 0;
    font-size: 1rem;
    color: #000;
    letter-spacing: 0.5rem;
    font-weight: bold;
    outline: none;
    font-family: 'Raleway';
  }

  .menu-item {
    display: inline-block;
    color: #000;
    text-decoration: none;
  }
  .menu-item a {
    color: #000;
    text-decoration: none;
    margin: 0px;
    display: block;
    width: 100%;
    height: 100%;
  }

  .menu-item::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #000;
    transition: width 0.3s;
  }

  .menu-item:hover::after {
    width: 100%;
  }

  .menu-item:hover {
    -webkit-text-fill-color: #000;
    text-decoration: none;
  }

  html {
    overflow: scroll;
  }
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
  @media (min-width: 700px) {
    display: none;
  }
`;

const MobileNav = () => (
  <StyledMobileNav>
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
  </StyledMobileNav>
);

export default MobileNav;

const PostLink = (props) => (
  <li className="menu-item">
    <a href={`/proyecto?titulo=${props.github}`}>{props.titulo}</a>
  </li>
);

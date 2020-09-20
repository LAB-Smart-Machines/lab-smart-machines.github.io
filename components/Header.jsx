import * as React from 'react';
import Link from 'next/link';
import logo from '../public/static/images/smart_machines_ctic_logo_orginal.png';
import DDMenu from './DropdownMenu';
import MobileNav from './MobileNav';

// stateless componente
const Header = () => {
  const node = React.useRef();
  return (
    <>
      <div className="menu-mobile" ref={node}>
        <MobileNav />
      </div>
      <div
        data-collapse="medium"
        data-animation="default"
        data-duration="400"
        className="navbar w-nav"
      >
        <div className="w-container">
          <a href="/" className="brand-block w-clearfix w-nav-brand">
            <img
              className="logo-img"
              src={logo}
              alt="regresar al inicio"
              sizes="(max-width: 767px) 50px, 136px"
              width="136"
            />
          </a>
          {/* https://nextjs.org/docs/api-reference/next/link */}
          <header role="navigation" className="nav-menu w-nav-menu">
            <Link href="/">
              <a className="nav-link w-nav-link">INICIO</a>
            </Link>
            <DDMenu />
            <Link href="/miembros">
              <a className="nav-link w-nav-link">MIEMBROS</a>
            </Link>
            <Link href="/publicaciones">
              <a className="nav-link w-nav-link">PUBLICACIONES</a>
            </Link>
            <Link href="#contact">
              <a className="nav-link w-nav-link">CONTACTO</a>
            </Link>
          </header>
        </div>
      </div>
    </>
  );
};

export default Header;

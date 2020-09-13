import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import favicon from '../public/static/images/favicon/favicon-32x32.png';

const App = ({ children }) => (
  <>
    <Head>
      <title>Laboratorio Smart Machines</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      {/* <!-- Icono --> */}
      <link rel="icon" sizes="192x192" href={favicon} />
      {/* {Google Fonts} */}
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600&family=Raleway:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
    </Head>

    <main>
      <Header />
      {children}
      <Footer />
    </main>
  </>
);

export default App;

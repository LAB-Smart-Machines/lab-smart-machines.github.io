import * as React from 'react';
import App from '../components/App';
import Readme from '../components/Readme';
import Seccion from '../components/Seccion';

const Proyecto = (props) => {
  const { titulo } = props;
  return (
    <App>
      <Seccion
        claseSeccion="header"
        claseHeading="main-heading"
        claseSub="main-subtitle"
        titulo={titulo}
      />
      <div id="projects" className="section grey">
        <div className="w-container">
          <div className="divider grey" />
          <Readme github={titulo} />
        </div>
      </div>
    </App>
  );
};

export default Proyecto;

Proyecto.getInitialProps = (context) => context.query;

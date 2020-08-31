import * as React from 'react';
import App from '../components/App';
import Seccion from '../components/Seccion';
import Readme from '../components/Readme';

const Proyecto = (props) => {
  return (
    <App>
      <Seccion
        claseSeccion={'header'}
        claseHeading={'main-heading'}
        claseSub={'main-subtitle'}
        titulo={props.titulo}
      />
      <div id="projects" className="section grey">
        <div className="w-container">
          <div className="divider grey"></div>
          <Readme github={props.titulo} />
        </div>
      </div>
    </App>
  );
};

export default Proyecto;

Proyecto.getInitialProps = (context) => {
  return context.query;
};

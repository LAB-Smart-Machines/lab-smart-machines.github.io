import * as React from 'react';
import App from '../components/App';
import Readme from '../components/Readme';

const Proyecto = (props) => {
  const { titulo } = props;
  return (
    <App>
      <Readme github={titulo} />
    </App>
  );
};

export default Proyecto;

Proyecto.getInitialProps = (context) => context.query;

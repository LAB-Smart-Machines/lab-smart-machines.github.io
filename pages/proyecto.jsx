import * as React from 'react';
import App from '../components/App';
import GQLNow from '../components/GQLNow';
import Seccion from '../components/Seccion';

import { useRouter } from 'next/router';

const Proyecto = () => {
  const router = useRouter();

  return (
    <App>
      <Seccion
        claseSeccion={'header'}
        claseHeading={'main-heading'}
        claseSub={'main-subtitle'}
        titulo={router.query.titulo}
      />
      <div id="projects" className="section grey">
        <div className="w-container">
          <div className="divider grey"></div>
          <GQLNow />
        </div>
      </div>
    </App>
  );
};

export default Proyecto;

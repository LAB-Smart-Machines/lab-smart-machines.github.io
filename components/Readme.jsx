import * as React from 'react';
import { useQuery } from '@apollo/client';
import ReactMarkdown from 'react-markdown';
import { README_GQL } from '../graphql/main';

import Seccion from './Seccion';

const ReadmeComponent = (github) => {
  const nameT = github.github;

  const { error, data } = useQuery(README_GQL, {
    variables: { name: nameT },
  });
  if (error) return <div>Error, No hay nada</div>;
  return (
    <>
      <Seccion
        claseSeccion="header"
        claseHeading="main-heading"
        claseSub="main-subtitle"
        titulo={nameT}
        subTexto={data ? data.repository.description : ''}
      />
      {data ? (
        <div id="projects" className="section grey">
          <div className="w-container">
            <div className="divider grey" />
            <ReactMarkdown
              source={data.repository.object.text}
              className="readme"
              linkTarget="_blank"
            />
          </div>
        </div>
      ) : (
        <>
          <div>Buscando...</div>
        </>
      )}
    </>
  );
};

export default ReadmeComponent;

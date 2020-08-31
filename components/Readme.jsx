import * as React from 'react';
import { useQuery } from '@apollo/client';
import { README_GQL } from '../graphql/main';

import ReactMarkdown from 'react-markdown';

const ReadmeComponent = (github) => {
  const nameT = github.github;

  const { loading, error, data } = useQuery(README_GQL, {
    variables: { name: nameT },
  });
  if (error) return <div>Error, No hay nada</div>;
  return data ? (
    <ReactMarkdown
      source={data.repository.object.text}
      className="readme"
      linkTarget="_blank"
    />
  ) : (
    <>
      <div>Buscando...</div>
    </>
  );
};

export default ReadmeComponent;

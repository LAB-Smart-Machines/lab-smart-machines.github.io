import { GraphQLClient } from 'graphql-request';
import useSWR, { SWRConfig } from 'swr';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router';

const API = 'https://api.github.com/graphql';
const graphqlClient = new GraphQLClient(API, {
  headers: {
    authorization: `bearer ${process.env.LSM_GITHUB_TOKEN}`,
  },
});

const gqlFetcher = (query) => graphqlClient.request(query);

export default function N() {
  return (
    <SWRConfig value={{ fetcher: gqlFetcher }}>
      <Now />
    </SWRConfig>
  );
}

const Now = () => {
  const router = useRouter();
  console.log(router.query.titulo);

  const { data, error } = useSWR(
    `{
    repository(owner:"LAB-Smart-Machines", name:\"` +
      router.query.titulo +
      `\") {
      object(expression: "master:README.md") {
        ... on Blob {
          text
        }
      }
      id
      url
    }
  }`
  );
  console.log('now', data, error);
  if (error) return <div>No hay nada</div>;
  return (
    <div>
      {data ? (
        <ReactMarkdown
          source={data.repository.object.text}
          className="readme"
          linkTarget="_blank"
        />
      ) : (
        <>
          <div>Buscando...</div>
        </>
      )}
    </div>
  );
};

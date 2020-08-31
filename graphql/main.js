import gql from 'graphql-tag';

export const README_GQL = gql`
  query getReadme($name: String!) {
    repository(owner: "LAB-Smart-Machines", name: $name) {
      object(expression: "master:README.md") {
        ... on Blob {
          text
        }
      }
      id
      url
    }
  }
`;

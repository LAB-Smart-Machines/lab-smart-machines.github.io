import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import withApollo from 'next-with-apollo';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

// Update the GraphQL endpoint to any instance of GraphQL that you like
const GRAPHQL_URL = 'https://api.github.com/graphql';

const link = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.LSM_GITHUB_TOKEN}`,
  },
});

// Export a HOC from next-with-apollo
// Docs: https://www.npmjs.com/package/next-with-apollo
export default withApollo(
  // You can get headers and ctx (context) from the callback params
  // e.g. ({ headers, ctx, initialState })
  ({ initialState }) => new ApolloClient({
    link,
    cache: new InMemoryCache().restore(initialState || {}),
  }),
);

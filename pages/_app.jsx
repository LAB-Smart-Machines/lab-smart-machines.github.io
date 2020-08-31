import '../public/static/styles/theme.css';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import withApollo from '@/apollo-client';
// https://github.com/zeit/next.js/blob/master/errors/css-global.md
// https://github.com/zeit/next.js/blob/master/errors/app-container-deprecated.md

function App({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default withApollo(App);

import '../public/static/styles/theme.css';
import { ApolloProvider } from '@apollo/client';
// import withApollo from '@/apollo-client';
import withApollo from '../apollo-client';
// https://github.com/zeit/next.js/blob/master/errors/css-global.md
// https://github.com/zeit/next.js/blob/master/errors/app-container-deprecated.md
import App from 'next/app';

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);

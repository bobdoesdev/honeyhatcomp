import { ApolloProvider } from '@apollo/client';
import NProgress from 'nprogress';
import Router from 'next/router';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Page from '../components/Page';
import { PAYPAL_CLIENT_ID } from '../utils/constants';

// TODO swap with your own
// import 'nprogress/nprogress.css';
import '../components/styles/nprogress.css';

import withData from '../lib/withData';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, apollo }) {
  // console.log(apollo);
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <PayPalScriptProvider
          options={{ 'client-id': PAYPAL_CLIENT_ID.clientId }}
        >
          <Component {...pageProps} />
        </PayPalScriptProvider>
      </Page>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps.query = ctx.query;

  return { pageProps };
};

export default withData(MyApp);

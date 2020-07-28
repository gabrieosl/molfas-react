import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

// import '~/config/ReactotronConfig';
import { store, persistor } from '~/redux';

import GlobalStyle from '~/styles/global';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

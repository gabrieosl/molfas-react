import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import { store, persistor } from '~/redux';

import Style from '../styles';
import 'react-toastify/dist/ReactToastify.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Style>
          <ToastContainer autoClose={3000} />
          <Component {...pageProps} />
        </Style>
      </PersistGate>
    </Provider>
  );
}

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { store } from '~/store';

export default function RouteWrapper({ isPrivate = false, ...rest }) {
  const { signed } = store.getState().authStore;

  if (!signed && isPrivate) {
    return <Redirect to="/store/signin" />;
  }

  return <Route {...rest} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

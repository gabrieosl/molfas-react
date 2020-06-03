import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import StoreLayout from '~/modules/store/pages/_layouts/_store';
import AuthLayout from '~/modules/store/pages/_layouts/_auth';

import Store from '~/modules/store/pages/Home';
import StoreSignIn from '~/modules/store/pages/SignIn';
import StoreSignUp from '~/modules/store/pages/SignUp';
import Product from '~/modules/store/pages/Product';
import Cart from '~/modules/store/pages/Cart';
import Orders from '~/modules/store/pages/Orders';

import { store } from '~/shared/redux';

function StoreRouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const { signed } = store.getState().authStore;

  if (!signed && isPrivate) {
    return <Redirect to="/store/signin" />;
  }

  return (
    <Route
      {...rest}
      render={props => (
        <StoreLayout>
          <Component {...props} />
        </StoreLayout>
      )}
    />
  );
}

function AuthRouteWrapper({ component: Component, ...rest }) {
  const { signed } = store.getState().authStore;

  if (signed) {
    return <Redirect to="/store" />;
  }

  return (
    <Route
      {...rest}
      render={props => (
        <AuthLayout>
          <Component {...props} />
        </AuthLayout>
      )}
    />
  );
}

export default function StoreRouter({ path }) {
  return (
    <Switch>
      <StoreRouteWrapper path={`${path}/`} exact component={Store} />
      {/* <StoreRouteWrapper path={`${path}/product/:name`} exact component={Product} /> */}
      {/* <StoreRouteWrapper path={`${path}/cart`} exact component={Cart} /> */}
      {/* <StoreRouteWrapper path={`${path}/orders`} exact component={Orders} /> */}
      {/* <StoreRouteWrapper path={`${path}/signout`} exact component={Store} /> */}
      {/* <StoreRouteWrapper
        path={`${path}/profile`}
        exact
        isPrivate
        component={StoreSignUp}
      /> */}
      <AuthRouteWrapper path={`${path}/signin`} exact component={StoreSignIn} />
      <AuthRouteWrapper path={`${path}/signup`} exact component={StoreSignUp} />
    </Switch>
  );
}

StoreRouteWrapper.propTypes = {
  component: PropTypes.node.isRequired,
  isPrivate: PropTypes.bool,
};

StoreRouteWrapper.defaultProps = {
  isPrivate: false,
};

StoreRouter.propTypes = {
  path: PropTypes.string.isRequired,
};

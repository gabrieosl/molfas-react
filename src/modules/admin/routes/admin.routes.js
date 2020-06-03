import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import AdminSignIn from '~/modules/admin/pages/SignIn';
import Products from '~/modules/admin/pages/Products';
import Machines from '~/modules/admin/pages/Machines';
import Molds from '~/modules/admin/pages/Molds';
import RawMaterials from '~/modules/admin/pages/RawMaterials';
import Staff from '~/modules/admin/pages/Staff';

import { store } from '~/shared/redux';

function RouteWrapper({ isPrivate = false, ...rest }) {
  const { signed } = store.getState().authAdmin;

  if (!signed && isPrivate) {
    return <Redirect to="/admin/signin" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/admin/products" />;
  }

  return <Route {...rest} />;
}

export default function AdminRouter({ path }) {
  return (
    <Switch>
      <RouteWrapper path="/configs" component={Products} isPrivate />
      <RouteWrapper path={`${path}/signin`} component={AdminSignIn} />
      <RouteWrapper path={`${path}/molds`} component={Molds} isPrivate />
      <RouteWrapper path={`${path}/products`} component={Products} isPrivate />
      <RouteWrapper path={`${path}/machines`} component={Machines} isPrivate />
      <RouteWrapper path={`${path}/molds`} component={Molds} isPrivate />
      <RouteWrapper
        path={`${path}/materia-prima`}
        component={RawMaterials}
        isPrivate
      />
      <RouteWrapper path={`${path}/staff`} component={Staff} isPrivate />
    </Switch>
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

AdminRouter.propTypes = {
  path: PropTypes.string.isRequired,
};

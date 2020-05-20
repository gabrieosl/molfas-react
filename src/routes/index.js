import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RouteAdmin from './RouteAdmin';
import RouteStore from './RouteStore';

import Home from '~/pages/Home';

import Store from '~/pages/Store/Home';
import StoreSignIn from '~/pages/Store/SignIn';
import StoreSignUp from '~/pages/Store/SignUp';
import Product from '~/pages/Store/Product';
import Cart from '~/pages/Store/Cart';
import Orders from '~/pages/Store/Orders';

import AdminSignIn from '~/pages/Admin/SignIn';
// import Admin from '~/pages/Admin';
import Products from '~/pages/Admin/Products';
import Machines from '~/pages/Admin/Machines';
import Molds from '~/pages/Admin/Molds';
import RawMaterials from '~/pages/Admin/RawMaterials';
import Staff from '~/pages/Admin/Staff';
import AllOrders from '~/pages/Admin/AllOrders';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} /> {/* Site da forture */}
      <RouteStore path="/store" exact component={Store} />
      <RouteStore path="/product/:name" exact component={Product} />
      <RouteStore path="/cart" exact component={Cart} />
      <RouteStore path="/orders" exact component={Orders} />
      <RouteStore path="/signin" exact component={StoreSignIn} />
      <RouteStore path="/signout" exact component={Store} />
      <RouteStore path="/signup" exact component={StoreSignUp} />
      <RouteAdmin path="/admin" exact component={Products} isPrivate />
      <RouteAdmin path="/admin/orders" component={AllOrders} isPrivate />
      {/* <RouteAdmin path="/admin/production" component={Default} isPrivate /> */}
      <RouteAdmin path="/admin/configs" component={Products} isPrivate />
      <RouteAdmin path="/admin/signin" component={AdminSignIn} />
      <RouteAdmin path="/admin/molds" component={Molds} isPrivate />
      <RouteAdmin path="/admin/products" component={Products} isPrivate />
      <RouteAdmin path="/admin/machines" component={Machines} isPrivate />
      <RouteAdmin path="/admin/molds" component={Molds} isPrivate />
      <RouteAdmin
        path="/admin/materia-prima"
        component={RawMaterials}
        isPrivate
      />
      <RouteAdmin path="/admin/staff" component={Staff} isPrivate />
      <RouteAdmin path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}

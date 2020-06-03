import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminRouter from '~/modules/admin/routes/admin.routes';
import StoreRouter from '~/modules/store/routes/store.routes';

import Home from '~/shared/pages/Home';

export default function Routes() {
  return (
    <Switch>
      <AdminRouter path="/admin" />
      <StoreRouter path="/store" />
      <Route path="/" exact component={Home} />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}

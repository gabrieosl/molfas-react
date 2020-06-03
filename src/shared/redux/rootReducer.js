import { combineReducers } from 'redux';

import authAdmin from '~/modules/admin/redux/auth/reducer';
import authStore from '~/modules/store/redux/auth/reducer';
import cart from '~/modules/store/redux/cart/reducer';

const reducers = combineReducers({
  authAdmin,
  authStore,
  cart,
});

export default reducers;

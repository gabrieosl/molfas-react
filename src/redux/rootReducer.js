import { combineReducers } from 'redux';

import authAdmin from '~/redux/authAdmin/reducer';
import authStore from '~/redux/auth/reducer';
import cart from '~/redux/cart/reducer';

const reducers = combineReducers({
  authAdmin,
  authStore,
  cart,
});

export default reducers;

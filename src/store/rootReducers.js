import { combineReducers } from 'redux';

import authAdmin from './authAdmin/reducer';
import authStore from './authStore/reducer';
import cart from './cart/reducer';
import user from './user/reducer';

const reducers = combineReducers({
  authAdmin,
  authStore,
  cart,
  user,
});

export default reducers;

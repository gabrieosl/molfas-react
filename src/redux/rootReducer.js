import { combineReducers } from 'redux';

import auth from '~/redux/auth/reducer';
import cart from '~/redux/cart/reducer';

const reducers = combineReducers({
  auth,
  cart,
});

export default reducers;

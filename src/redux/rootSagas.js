import { all } from 'redux-saga/effects';

import authAdmin from '~/redux/authAdmin/sagas';
import authStore from '~/redux/auth/sagas';
import cart from '~/redux/cart/sagas';

export default function* rootSaga() {
  yield all([authAdmin, authStore, cart]);
}

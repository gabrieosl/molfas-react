import { all } from 'redux-saga/effects';

import auth from '~/redux/auth/sagas';
import cart from '~/redux/cart/sagas';

export default function* rootSaga() {
  yield all([auth, cart]);
}

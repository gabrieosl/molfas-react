import { all } from 'redux-saga/effects';

import authAdmin from '~/modules/admin/redux/auth/sagas';
import authStore from '~/modules/store/redux/auth/sagas';
import cart from '~/modules/store/redux/cart/sagas';

export default function* rootSaga() {
  yield all([authAdmin, authStore, cart]);
}

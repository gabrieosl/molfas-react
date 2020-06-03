import { call, select, put, all, takeLatest } from 'redux-saga/effects';
// import { toast } from 'react-toastify';

import api from '~/modules/store/services/api';
import history from '~/shared/services/history';
// import { formatPrice } from '../../util/format';

import { addToCartSuccess, incrementItemSuccess } from './actions';

function* addToCart({ name }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.name === name)
  );

  // const stock = yield call(api.get, `/stock/${id}`);

  // const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  // if (amount > stockAmount) {
  //   toast.error('Product out of stock');
  //   return;
  // }

  if (productExists) {
    yield put(incrementItemSuccess(productExists.id));
  } else {
    const response = yield call(
      api.get,
      `/store/products/${encodeURIComponent(name)}`
    );

    const data = {
      ...response.data,
      amount,
      // priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
  history.push('/cart');
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);

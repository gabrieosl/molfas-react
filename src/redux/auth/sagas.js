import { takeLatest, all, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { signInRequest, signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/session', {
      email,
      password,
    });

    const { token, customer } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, customer));
    history.push('/store');
  } catch (err) {
    toast.error('Algo deu errado na autenticação. Verifique os dados');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { firstName, lastName, email, password } = payload;

    yield call(api.post, '/store/register', {
      firstName,
      lastName,
      email,
      password,
    });

    yield put(signInRequest(email, password));
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados!');

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.authStore;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/store');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@authStore/SIGN_IN_REQUEST', signIn),
  takeLatest('@authStore/SIGN_UP_REQUEST', signUp),
  takeLatest('@authStore/SIGN_OUT', signOut),
]);

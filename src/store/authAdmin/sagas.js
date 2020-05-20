import { takeLatest, all, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/apiAdmin';
import history from '~/services/history';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { username, password } = payload;

    const response = yield call(api.post, '/api/session', {
      username,
      password,
    });

    const { token, user } = response.data;

    // verify if user has role ADM
    if (!user.role === 'ADM') {
      toast.error('Você não tem autorização para acessar esse sistema.');
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
    history.push('/admin');
  } catch (err) {
    toast.error('Algo deu errado na autenticação. Verifique os dados');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.authAdmin;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@authAdmin/SIGN_IN_REQUEST', signIn),
  takeLatest('@authAdmin/SIGN_OUT', signOut),
]);

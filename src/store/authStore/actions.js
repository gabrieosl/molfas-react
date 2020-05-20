export function signInRequest(email, password) {
  return {
    type: '@authStore/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, customer) {
  return {
    type: '@authStore/SIGN_IN_SUCCESS',
    payload: { token, customer },
  };
}

export function signUpRequest(firstName, lastName, email, password) {
  return {
    type: '@authStore/SIGN_UP_REQUEST',
    payload: { firstName, lastName, email, password },
  };
}

export function signFailure() {
  return {
    type: '@authStore/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@authStore/SIGN_OUT',
  };
}

export function setViewMode(mode) {
  return {
    type: '@authStore/SET_PRODUCTS_MODE_VIEW',
    payload: { mode },
  };
}

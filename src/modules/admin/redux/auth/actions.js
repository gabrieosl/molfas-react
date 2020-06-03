export function signInRequest(username, password) {
  return {
    type: '@authAdmin/SIGN_IN_REQUEST',
    payload: { username, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@authAdmin/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signFailure() {
  return {
    type: '@authAdmin/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@authAdmin/SIGN_OUT',
  };
}

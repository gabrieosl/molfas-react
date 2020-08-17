import produce from 'immer';

const INITIAL_STATE = {
  signed: false,
  token: null,
  loading: false,
  user: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.loading = false;
        draft.signed = true;
        draft.token = action.payload.token;
        draft.user = action.payload.user;

        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        draft.signed = false;
        draft.token = null;
        draft.user = null;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.loading = false;
        draft.signed = false;
        draft.token = null;
        draft.user = null;
        break;
      }
      default:
    }
  });
}

import produce from 'immer';

const INITIAL_STATE = {
  signed: false,
  token: null,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@authAdmin/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@authAdmin/SIGN_IN_SUCCESS': {
        draft.loading = false;
        draft.signed = true;
        draft.token = action.payload.token;

        break;
      }
      case '@authAdmin/SIGN_FAILURE': {
        draft.loading = false;
        draft.signed = false;
        draft.token = null;
        break;
      }
      case '@authAdmin/SIGN_OUT': {
        draft.signed = false;
        draft.token = null;
        break;
      }
      default:
    }
  });
}

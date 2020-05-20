import produce from 'immer';

const INITIAL_STATE = {
  signed: false,
  token: null,
  loading: false,
  customer: null,
  viewMode: 'grid',
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@authStore/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@authStore/SIGN_IN_SUCCESS': {
        draft.loading = false;
        draft.signed = true;
        draft.token = action.payload.token;
        draft.customer = action.payload.customer;

        break;
      }
      case '@authStore/SIGN_FAILURE': {
        draft.loading = false;
        draft.signed = false;
        draft.token = null;
        draft.customer = null;
        break;
      }
      case '@authStore/SIGN_OUT': {
        draft.loading = false;
        draft.signed = false;
        draft.token = null;
        draft.customer = null;
        break;
      }
      case '@authStore/SET_PRODUCTS_MODE_VIEW': {
        draft.viewMode = action.payload.mode;
        break;
      }
      default:
    }
  });
}

const initialState = {};

export default function user(state = initialState, { type, payload }) {
  switch (type) {
    case '@authAdmin/SIGN_IN_SUCCESS': {
      return payload.user;
    }
    default:
      return state;
  }
}

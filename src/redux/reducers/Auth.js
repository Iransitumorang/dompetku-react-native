/* eslint-disable prettier/prettier */
/** @format */
const initialState = {
  loading: false,
  data: {
    id: null,
    password: null,
    email: null,
  },
  error: null,
};

const fetch = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {...state, loading: true};
    case 'LOGIN_ERROR':
      alert(action.payload.data.message);
      return {
        ...state,
        loading: false,
        data: state.data,
        error: action.payload,
      };
    case 'LOGIN_SUCCESS':
      alert(action.payload.message);
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case 'AUTH_LOGOUT':
      return {loading: false, data: null, error: null};

    default:
      return state;
  }
};

export {fetch};

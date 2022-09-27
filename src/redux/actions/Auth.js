/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
/** @format */
import axios from 'axios';
const loginRequest = () => {
  return {
    type: 'LOGIN_REQUEST',
  };
};
const loginSuccess = data => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: data,
  };
};

const loginError = error => { console.log(loginError,'gimanaaa');
  return {
    type: 'LOGIN_ERROR',
    payload: error,
  };
};
export const LoginAuth = formdata => {
  return dispatch => {
    dispatch(loginRequest());
    axios({
      method: 'POST',
      data: {
        email: formdata.email,
        password: formdata.password,
      },
      url:'http://192.168.8.101:3333/users',
    })
      .then(res => {
        if (res.data.ID) {
          dispatch(loginSuccess(res.data));
        } else {
          alert(res.data.message);
          dispatch(loginError(res.data.message));
        }
      })
      .catch(err => {
        dispatch(loginError(err.response));
      });
  };
};

export const AuthLogout = () => {
  return {
    type: 'AUTH_LOGOUT',
  };
};

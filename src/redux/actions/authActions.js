// export const LOGIN_USER = 'LOGIN_USER';
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// export const loginUser = (credentials) => ({
//   type: LOGIN_USER,
//   payload: credentials,
// });

// export const loginSuccess = (user) => ({
//   type: LOGIN_SUCCESS,
//   payload: user,
// });

// export const loginFailure = (error) => ({
//   type: LOGIN_FAILURE,
//   payload: error,
// });

// src/redux/actions/authActions.js

export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';  // Add this line

export const loginUser = (credentials) => ({
  type: LOGIN_USER,
  payload: credentials,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,  // Implement the logout action
});

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export const login = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
  return {
    type: LOGIN_SUCCESS,
    payload: user
  };
};

export const logout = () => {
  localStorage.removeItem('user');
  return {
    type: LOGOUT_SUCCESS
  };
};

export const register = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
  return {
    type: REGISTER_SUCCESS,
    payload: user
  };
};
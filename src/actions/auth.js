import {
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT
} from './types';

// Load User
export const loadUser = () => async (dispatch) => {
    try {
        console.log(localStorage.getItem('user'))
        dispatch({
            type: USER_LOADED,
            payload: localStorage.getItem('user')
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
};

export const logout = () => ({ type: LOGOUT });
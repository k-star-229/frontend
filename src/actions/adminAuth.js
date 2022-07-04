import api from '../utils/api';
import { setAlert } from './alert'; 
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from './types';
  
// Register User
export const register = (name, email, password) => async (dispatch) => {
    
    const body = { name, email, password };
    try {
        const res = await api.post('/admin/signup', body);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: JSON.stringify(res.data)
        });
        localStorage.setItem('user', JSON.stringify(res.data));
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: REGISTER_FAIL
        });
    }
};

// Login User
export const login = (email, password) => async (dispatch) => {
    const body = { email, password };
    try {
        const res = await api.post('/admin/signin', body);
        
        dispatch({
            type: LOGIN_SUCCESS,
            payload: JSON.stringify(res.data)
        });
        console.log(res.data);
        localStorage.setItem('user', JSON.stringify(res.data));
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: LOGIN_FAIL
        });
    }
};
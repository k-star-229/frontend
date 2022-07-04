import {
    REGISTER_SUCCESS,
    //REGISTER_FAIL,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    // LOGIN_FAIL,
    LOGOUT
} from '../actions/types';
  
const initialState = {
    isAuthenticated: false,
    loading: true,
    user: null
};
  
function masterAuthReducer(state = initialState, action) {
    const { type, payload } = action;
    
    switch (type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            };
        case AUTH_ERROR:
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: null
            };
        default:
            return state;
    }
}
  
export default masterAuthReducer;
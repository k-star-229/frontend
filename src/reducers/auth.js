import {
    USER_LOADED,
    LOGOUT
} from '../actions/types';
  
const initialState = {
    isAuthenticated: false,
    loading: true,
    user: null
};
  
function authReducer(state = initialState, action) {
    const { type, payload } = action;
    
    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            };
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
  
export default authReducer;
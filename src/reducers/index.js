import { combineReducers } from 'redux';
import auth from './auth';
import adminAuth from './adminAuth';
import clientAuth from './clientAuth';
import masterAuth from './masterAuth';
import alert from './alert';
import wallet from './wallet';

export default combineReducers({
    auth,
    adminAuth,
    clientAuth,
    masterAuth,
    alert,
    wallet
});

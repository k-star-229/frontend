import { WALLET_CONNECTED, WALLET_DISCONNECTED } from '../actions/types';

const initialState = [];

function walletReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case WALLET_CONNECTED:
      return {...state, ...payload};
    case WALLET_DISCONNECTED:
      return {...state, ...payload};
      
    default:
      return state;
  }
}

export default walletReducer;

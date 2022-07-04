import { WALLET_CONNECTED, WALLET_DISCONNECTED } from './types';

export const setWallet = (wallet) => dispatch => {
    dispatch({
        type: WALLET_CONNECTED,
        payload: { wallet }
    });
};
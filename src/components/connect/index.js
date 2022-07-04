import { toast } from 'react-toastify';
import { useEagerConnect, useInactiveListener } from "../../web3/hooks";
import { useWeb3React } from "@web3-react/core";
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setWallet } from '../../actions/wallet';

import "./index.scss";
import { injected } from "../../web3/connectors";

const Connect = ({ setWallet }) => {
	const { connector, activate, active, error, account, deactivate } = useWeb3React();

	const walletButtomClass = active ? "--active" : "";

	const [activatingConnector, setActivatingConnector] = useState();
	useEffect(() => {
		if (activatingConnector && activatingConnector === connector) {
			setActivatingConnector(undefined);
		}
	}, [activatingConnector, connector]);

	const triedEager = useEagerConnect();

	useInactiveListener(!triedEager || !!activatingConnector);

    useEffect(() => {
        if(!error) return;
        let message;
        if(error.name === "UnsupportedChainIdError"){
            message = "Unsupported network, please connect to Ropsten network"
        }else{
            message = error.message;
        }
        toast.error(message, {
            position: "top-left",
        });
    }, [error]);

	const connectWalletPressed = () => {
		setActivatingConnector(injected);
		activate(injected);
	};

	return (
		<div className="metamask__window">
			<button
				id="walletButton"
				className={walletButtomClass}
				onClick={() => active ? deactivate() : connectWalletPressed()}
			>
				<img src="/image/metamask.svg" />
				{active && account.length > 0 ? (
					account.slice(0,10) + "......" + account.slice(30)
				) : (
					<span>Connect Wallet</span>
				)}{active && account.length > 0 ? (
					setWallet(account)
				) : (''
				)}
			</button>
		</div>
	);
}

const mapStateToProps = (state) => ({
    wallet: state.wallet.wallet
});

export default connect(mapStateToProps, { setWallet })(Connect);
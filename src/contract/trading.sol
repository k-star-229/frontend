// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract Trading {
	
	struct TradingSignal {
		uint date;
		uint productID;
		string method;
        string typeOfTrading;
		string tokenSymbol;
		uint strickPrice;
		address client;
	}

	TradingSignal public tradingSignal;

	function sendTradingSignal(
		uint _date, 
		uint _productID, 
		string memory _method, 
        string memory _typeOfTrading,
		string memory _tokenSymbol, 
		uint _strickPrice, 
		address _client
	) public {
        tradingSignal.date = _date;
        tradingSignal.productID = _productID;
        tradingSignal.method = _method;
        tradingSignal.typeOfTrading = _typeOfTrading;
        tradingSignal.tokenSymbol = _tokenSymbol;
        tradingSignal.strickPrice = _strickPrice;
        tradingSignal.client = _client;
    }
}
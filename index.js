var Web3_0_20_6 = require('./lib/web3');

// dont override global variable
if (typeof window !== 'undefined' && typeof window.Web3 === 'undefined') {
    window.Web3 = Web3_0_20_6;
}

module.exports = Web3_0_20_6;

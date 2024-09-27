require("@nomiclabs/hardhat-waffle");

module.exports = {
    solidity: "0.8.0",
    networks: {
        fuji: {
            url: "https://api.avax-test.network/ext/bc/C/rpc",
            accounts: [`0x${0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC}`] // Replace with your wallet's private key
        }
    }
};

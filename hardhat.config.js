require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("./tasks/block-number");
require("./tasks/accounts");
require("hardhat-gas-reporter");
require("solidity-coverage");

/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_RPC_URL =
    process.env.GOERLI_RPC_URL ||
    "https://eth-goerli.alchemyapi.io/v2/lPdXaEgRPm7qBT3KflWvBXRTQHFYlwF_"
const PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;
const API_KEY = process.env.ETHERSCAN_API_KEY;
const GOERLI_CHAIN_ID = process.env.GOERLI_CHAIN_ID;
const COINMARKET = process.env.COINMARKET_API_KEY;

module.exports = {
    defaultNetwork: "hardhat",

    networks: {
        hardhat: {},
        goerli: {
            url: "https://eth-goerli.alchemyapi.io/v2/lPdXaEgRPm7qBT3KflWvBXRTQHFYlwF_",
            accounts: [PRIVATE_KEY],
            chainId: 5,
        },
        localhost: {
          url: `http://127.0.0.1:8545/`,
          // accounts: Thanks hardhat 😊!
          chainId: 31337,
        },
    },
    solidity: "0.8.17",
    etherscan: {
        apikey: API_KEY,
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-reporter.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKET
    },

}

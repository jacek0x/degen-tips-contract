import '@nomicfoundation/hardhat-ignition-ethers';
import '@nomicfoundation/hardhat-toolbox';
import '@nomicfoundation/hardhat-verify';
import dotenv from 'dotenv';
import type { HardhatUserConfig } from 'hardhat/config';

dotenv.config();

const config: HardhatUserConfig = {
  networks: {
    // for mainnet
    base_mainnet: {
      url: process.env.ALCHEMY_BASE_MAINNET_RPC_URL as string,
      accounts: [process.env.PRIVATE_KEY as string],
    },
    // for testnet
    base_goerli: {
      url: process.env.ALCHEMY_BASE_GOERLI_RPC_URL as string,
      accounts: [process.env.PRIVATE_KEY as string],
    },
    base_sepolia: {
      url: process.env.ALCHEMY_BASE_SEPOLIA_RPC_URL as string,
      accounts: [process.env.PRIVATE_KEY as string],
    },
  },
  etherscan: {
    apiKey: {
      base: process.env.BASESCAN_API_KEY ?? '',
      baseGoerli: process.env.BASESCAN_API_KEY ?? '',
    },
  },
  solidity: {
    version: '0.8.20',
    settings: {
      optimizer: {
        enabled: true,
        runs: 999999,
      },
    },
  },
  sourcify: {
    enabled: true,
  },
};

export default config;

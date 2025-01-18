# Blockchain AMM (Automated Market Maker)

This project is the Automated Market Maker (AMM) built on the Ethereum blockchain. The application interacts with two tokens (`Dapp Token` and `USD Token`) and a deployed AMM contract to simulate token swaps and liquidity provisioning. 

The goal of this project is to demonstrate how decentralized finance (DeFi) protocols interact with smart contracts on the Ethereum blockchain. It also provides a simple interface for users to swap tokens, deposit, withdraw, and view charts related to token performance.

#### Main Features:
1. **Blockchain Initialization:**
   The application starts by connecting to a local Ethereum provider (e.g., MetaMask) and loads the network and user account. It also detects network and account changes to update the application's state accordingly.

2. **Loading and Displaying Tokens:**
   The app loads ERC-20 token information, such as Dapp Token and USD Token, and displays details such as the token symbol, name, and decimal precision.

3. **Loading and Interacting with the AMM (Automated Market Maker) Contract:**
   The app interacts with an AMM contract that allows for swapping between two tokens (Dapp Token and USD Token). This enables users to perform decentralized token swaps.

4. **Market Actions - Swap, Deposit, Withdraw:**
   Users can perform various operations:
   - **Swap:** Exchange tokens (e.g., Dapp Token for USD Token).
   - **Deposit:** Add liquidity to the AMM contract.
   - **Withdraw:** Remove liquidity from the AMM.
   - **Charts:** Visualize transactions and liquidity on charts.

5. **Transaction Optimization:**
   The app aims to optimize the allocation of transactions across different DEXs based on various criteria, such as price, liquidity, or fees.

#### Technologies Used:
- **React:** React is used for building the frontend of the application, managing the user interface, and interacting with the user.
- **Redux:** Redux is used for managing the application state, making it easier to update data such as token information or account status.
- **ethers.js:** ethers.js is used for interacting with Ethereum contracts, performing transactions, and reading data from the blockchain.
- **Hardhat:** Hardhat is used for smart contract development, deployment, and interaction with test networks.

#### Future Enhancements:
- **Multi-Network Support:** Adding support for different Ethereum networks (e.g., Rinkeby, Goerli) to enable testing on various chains.
- **Advanced Optimization:** Implementing more advanced optimization strategies such as risk analysis.
- **Mobile Responsiveness:** Improving the styling for better responsiveness on mobile devices.

#### Contract Deployment Process:
1. **Token Deployment:** The app allows for the deployment of two ERC-20 tokens, Dapp Token and USD Token, with an initial supply of 1 million tokens each.
2. **AMM Contract Deployment:** An AMM contract is deployed, enabling token swaps between users.
3. **Token Distribution:** Tokens are distributed to investor accounts to simulate market activity.
4. **Liquidity Addition:** Users can add liquidity to the AMM, balancing the token pool.
5. **Token Swapping:** Investors can swap tokens through the AMM contract.

#### Troubleshooting:
- **Contract Interaction Problems:** Verify contract addresses in the configuration files.
- **Swap Transaction Issues:** Ensure tokens are properly approved and that the account has sufficient token balance.

This project provides a complete solution for executing transactions on Ethereum using AMM contracts and optimizing transactions across multiple DEXs.

### To run this project locally, follow these steps:

### 1. Clone the repository:

   git clone https://github.com/michalradzik/blockchain-amm.git
   cd blockchain-amm

### 2. Install dependencies:
npm install

### 3. Deploy the contracts:
First, deploy the smart contracts by running the deploy.js script:

npx hardhat run scripts/deploy.js --network localhost

This will deploy the tokens and AMM contracts.

Seed the blockchain with tokens and liquidity:

Run the seed.js script to distribute tokens to investor accounts and add liquidity to the AMM:

npx hardhat run scripts/seed.js --network localhost

### Start the frontend application:
npm start
Now you can access the application at http://localhost:3000 and interact with the deployed contracts.


























































   ```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```


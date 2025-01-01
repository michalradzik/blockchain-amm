import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ethers } from 'ethers';

// Components
import Navigation from './Navigation';
import Tabs from './Tabs';
import Swap from './Swap';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import Charts from './Charts';

import {
  loadProvider,
  loadNetwork,
  loadAccount,
  loadTokens,
  loadAMM
} from '../store/interactions';

function App() {
  const dispatch = useDispatch();

  const loadBlockchainData = async () => {
    // Initiate provider
    console.log("Initializing provider...");
    const provider = await loadProvider(dispatch);
    console.log("Provider initialized:", provider);

    // Fetch current network's chainId
    const chainId = await loadNetwork(provider, dispatch);
    console.log("Current chain ID:", chainId);

    // Reload page when network changes
    window.ethereum.on('chainChanged', () => {
      console.log("Chain changed, reloading...");
      window.location.reload();
    });

    // Fetch current account from Metamask when changed
    window.ethereum.on('accountsChanged', async () => {
      console.log("Accounts changed, reloading account...");
      await loadAccount(dispatch);
    });

    // Load tokens
    const tokens = await loadTokens(provider, chainId, dispatch);
    if (tokens && tokens.length > 0) {
      console.log("Tokens loaded successfully:");
      for (const [index, token] of tokens.entries()) {
        console.log(`Token ${index + 1}:`);
        console.log(`  Address: ${token.address}`);
        console.log(`  Symbol: ${await token.symbol()}`);
        console.log(`  Name: ${await token.name()}`);
        console.log(`  Decimals: ${await token.decimals()}`);
      }
    } else {
      console.error("No tokens found.");
    }

    // Load AMM contract
    const amm = await loadAMM(provider, chainId, dispatch);
    console.log("Loaded AMM Contract:", amm ? amm.address : "AMM contract not found.");
  };

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <Container>
      <HashRouter>
        <Navigation />
        <hr />
        <Tabs />
        <Routes>
          <Route exact path="/" element={<Swap />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/charts" element={<Charts />} />
        </Routes>
      </HashRouter>
    </Container>
  );
}

export default App;

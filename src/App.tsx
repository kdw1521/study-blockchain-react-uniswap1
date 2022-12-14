import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useWeb3React } from '@web3-react/core';
import {injected} from './utils/connectors';

function App() {

  const {
    chainId,
    account,
    active,
    activate,
    deactivate
  } = useWeb3React();

  function handleConnect() {
    if (active) {
      deactivate();
      return;
    }

    activate(injected, (error) => {
      if (error) {
        alert(error);
      }
    })
  }

  return (
    <div className="App">

      <div>
        <p>Account: {account}</p>
        <p>ChainId: {chainId}</p>
      </div>
      <div>
        <button onClick={handleConnect}>{active ? 'DisConnect' : 'Connect'}</button>
      </div>

    </div>
  );
}

export default App;

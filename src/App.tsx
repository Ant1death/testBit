import React from 'react';
import './App.css';
import CryptoConverter from './features/CryptoConverter';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Crypto Converter</h1>
        <CryptoConverter />
      </header>
    </div>
  );
};

export default App;
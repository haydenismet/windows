import React from 'react';
import logo from './logo.svg';
import "98.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        DO IT
        <button>Hello windows 98</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

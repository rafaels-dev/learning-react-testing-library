import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import useLoading from './hooks/useLoading';
import './App.css';

function App() {

  const { loading, setLoading } = useLoading();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [])

  if (loading) {
    return (
      <div id="loading" data-testid="loader">Carregando...</div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

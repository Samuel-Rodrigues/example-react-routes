import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Link } from 'react-router-dom';

import Routes from './Routes'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navManu">
          <Link to='/'>
            <button className="buttonHome">
              <strong>Home</strong>
            </button>
          </Link>
          <Link to='/page1'>
            <button className="buttonPage1">
              <strong>Mostrar página 01</strong>
            </button>
          </Link>
          <Link to='/page2'>
            <button className="buttonPage2">
              <strong>Mostrar página 02 </strong>
            </button>
          </Link>
        </div>
        <header className="App-header">
          <Routes />
        </header>
      </div>
    </Router>
  );
}

export default App;

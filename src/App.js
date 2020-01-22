import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Link } from 'react-router-dom';

import Routes from './Routes'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <button>
            <Link to='/page1'> <strong>Mostrar página 01</strong> </Link>
          </button>
          <button>
            <Link to='/page2'> <strong>Mostrar página 02 </strong></Link>
          </button>
          
          <Routes />
        </header>
      </div>
    </Router>
  );
}

export default App;

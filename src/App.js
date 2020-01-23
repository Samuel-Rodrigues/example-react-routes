import React from 'react';
import './App.css';

import { BrowserRouter as Router, Link } from 'react-router-dom';

import Routes from './Routes'

function App() {
  return (

    //* Componente Router deve abranger todo o corpo do código */ 
    <Router >
      <div className="App">
        <div className="navManu">

          {/* Link similar ha TAG a. Sem refresh de pagina */}
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
          
          {/* Aqui será mostrada todas as páginas(componentes da apliacação.) */}
          <Routes />
        </header>
      </div>
    </Router >
  );
}

export default App;

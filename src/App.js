import React from 'react';
import Routes from '../src/routes';
import logo from '../src/assets/images/jade1';
import './App.css';

function App() {
  return (
    <div className='App'>
      {/* <header className='App-header'>
        <p>Build in progress</p>
        <img src={logo} className='App-logo' alt='logo' />
        <a
          className='App-link'
          href='https://stackd.gg'
          target='_blank'
          rel='noopener noreferrer'>
          Stackd Time
        </a>
      </header> */}
      <Routes />
    </div>
  );
}

export default App;

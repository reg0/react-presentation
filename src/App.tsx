import React from 'react';
import logo from './logo.svg';
import './App.css';
import FooTs from './foo/foo';
import { AuthContext } from './auth-context';

function App(props: {auth: AuthContext}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FooTs textToShow="foo " auth={props.auth} />
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

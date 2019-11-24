import React from 'react';
import logo from './logo.svg';
import './App.css';
import FooTs from './foo/foo';
import FooJs from './foo/foo-js';
// import FooJsNoClasses from './foo/foo-js-no-classes';
import FooFn from './foo/foo-fn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FooTs textToShow="foo " />
        <FooJs textToShow="foo " />
        {/* <FooJsNoClasses textToShow="foo " /> */}
        <FooFn textToShow="foo " />
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

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Root from './components/Root/Root';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Root>
        <Header />

      </Root>
    </div>
  );
}

export default App;

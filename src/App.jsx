import React from 'react';

import UserInfo from './components/UserInfo';
import Header from './components/Header';
import Body from './components/Body';
import './App.css';

function App() {
  return (
    <div className="App">
      <UserInfo />
      <div className='side-right'>
        <Header />
        <Body />
      </div>
    </div>
  );
}

export default App;

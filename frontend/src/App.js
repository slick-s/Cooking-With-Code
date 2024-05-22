import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './componets/NavBar';
import Background from './componets/background';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Background/>
    </div>
  );
}

export default App;

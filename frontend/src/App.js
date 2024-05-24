import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './componets/NavBar';
import Background from './componets/background';
import React, { useEffect, useState } from 'react' 

function App() {
  const [message, setMessage] = useState()

  useEffect(() => {
    fetch('/api')
      .then((res) => res.text())
      .then((data) => setMessage(data))
  }, [])

  return (

    <div className="App">
      <NavBar />
      <Background/>

    <div className='App'>
      <p>{message}</p>
    </div>
  )
}

export default App
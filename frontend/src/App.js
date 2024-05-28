// Modules
import axios, * as others from 'axios';

// React Modules
import React, { useEffect, useState } from 'react';
import { ReactDOM } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import NavBar from './components/NavBar';
import RecipeCardCategory from './components/RecipeCardCategory';
import Background from './components/background';

// Pages
import Home from './pages/Home'
import American from './pages/American'
import Chinese from './pages/Chinese'
import Greek from './pages/Greek'
import Mexican from './pages/Mexican'
import Error404 from './pages/Error404'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/american' element={<American />} />
          <Route path='/mexican' element={<Mexican />} />
          <Route path='/greek' element={<Greek />} />
          <Route path='/chinese' element={<Chinese />} />
          <Route path='/*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
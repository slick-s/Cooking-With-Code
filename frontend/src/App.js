// Modules
import axios, * as others from 'axios';

// React Modules
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import NavBar from './components/NavBar';

// Pages
import Home from './pages/Home'
import American from './pages/American'
import Chinese from './pages/Chinese'
import Greek from './pages/Greek'
import Mexican from './pages/Mexican'
import Egyptian from './pages/Egyptian';
import Error404 from './pages/Error404'
import FullRecipe from './pages/FullRecipe';


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
          <Route path='/egyptian' element={<Egyptian />} />
          <Route path='/fullrecipe' element={<FullRecipe />} />
          <Route path='/*' element={<Error404 />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
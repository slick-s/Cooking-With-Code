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
import Favorites from './pages/Favorites';
import Error404 from './pages/Error404'
import FullRecipe from './pages/FullRecipe';
import Category from './pages/Category';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/american' element={<American />} />
          <Route path='/mexican' element={<Mexican />} />
          <Route path='/greek' element={<Greek />} />
          <Route path='/chinese' element={<Chinese />} />
          <Route path='/egyptian' element={<Egyptian />} />
          <Route path='/fullrecipe/:id' element={<FullRecipe />} />
          <Route path='/category/:id' element={<Category />} />
          <Route path='/*' element={<Error404 />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
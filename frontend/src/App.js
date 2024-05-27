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
import Dessert from './pages/Dessert'
import Dinner from './pages/Dinner'
import Lunch from './pages/Lunch'
import Error404 from './pages/Error404'

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/american' element={<American />} />
          <Route path='/lunch' element={<Lunch />} />
          <Route path='/dinner' element={<Dinner />} />
          <Route path='/dessert' element={<Dessert />} />
          <Route path='/*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
      <div className="message-container">
      </div>
    </div>
  );
}

export default App;
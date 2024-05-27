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
  const [recipes_, setRecipes] = useState([]); // Initialize state with an empty string



  const randomRecipes = async () => { 

  }

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((res) => {
      setRecipes(res.data.meals)
    })
  }, [])
  
/*   const data = await fetch('https://api.spoonacular.com/recipes/complexSearch?${process.env.REACT_API_KEY&cuisine=${}')
     const data = await fetch('https://api.spoonacular.com/recipes/random?${process.env.REACT_API_KEY&number=10')
*/
      
  // const Rec = ({ data }) => {
  //   return (
  //     <div key={data.id}>
  //       <p>{data.title}</p>
  //     </div>
  //   )
  // }

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
      {/* <NavBar /> */}
      {/* <Background /> */}
      <div className="message-container"> {/* Add a descriptive class name */}
        <h1>Recipes</h1>
        {recipes_.map((recipe => {
          return (
            <div key={recipe.idMeal}>
              <p>{recipe.strMeal}</p>
            </div>
          )
        }))}
        {/* {recipes.map((recipe)=> (
          <div className="recipe" key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.body}</p>
            </div>
        ))} */}
      </div>
    </div>
  );
}

export default App;
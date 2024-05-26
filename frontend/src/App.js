import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar'; // Adjust the import according to your project structure
import Background from './components/background'; // Adjust the import according to your project structure
import axios from 'axios';

function App() {
  const [recipes, setRecipes] = useState([]); // Initialize state with an empty string

  useEffect(() => {

    const fetchRecipes = async()=>{
        fetch('http://localhost:5000/api')
        try{
          const response = await axios.get('http://localhost:5000/api');
          if(Array.isArray(response.data)){
            setRecipes(response.data);
          }else{
            throw new Error('Data is not an array');
          }
        }
        catch(error) {console.error('There was a problem with the fetch operation:', error);} 

        fetchRecipes();//Trigger fetching method on component mount
      }
    }, []);//Run the effect only once on component mount
    
   const addRecipe = async(recipe) =>{
    try{
      const response = await axios.post('http://localhost5000/recipes',recipe);
      console.log('Recipe has been added', response.data);
    }catch(error){
      console.error('Error with the Post operation', error);
    }
   }   

  return (
    <div className="App">
      <NavBar />
      <Background />
      <div className="message-container"> {/* Add a descriptive class name */}
        <h1>Recipes</h1>
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <h2>{recipe.title}</h2>
              <p>{recipe.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
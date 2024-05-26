import React, { useEffect, useState } from 'react';
import NavBar from './componets/NavBar'; // Adjust the import according to your project structure
import Background from './componets/background'; // Adjust the import according to your project structure

function App() {
  const [recipes, setRecipes] = useState([]); // Initialize state with an empty string

  useEffect(() => {

    const fetchUsingPromiseWithFetchApi =()=>{
        fetch('http://localhost5000/api')
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.text();
        }).then((data) => {
          if(Array.isArray(data)){
            setRecipes(data);
          }
          else{
            throw new Error('data is not an array');
          }
        })
        .catch((error) => console.error('There was a problem with the fetch operation:', error));

        fetchUsingPromiseWithFetchApi();//Trigger fetching method on component mount
      }
    }, []);//Run the effect only once on component mount
    
      

  return (
    <div className="App">
      <NavBar />
      <Background />
      <div className="message-container"> {/* Add a descriptive class name */}
        <h1>Recipes</h1>
        {recipes.map((recipe)=> (
          <div className="recipe" key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.body}</p>
            </div>
        ))}
      </div>
    </div>
  );
}

export default App;
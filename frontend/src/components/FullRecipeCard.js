import axios, * as others from 'axios';

// React Modules
import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';


function FullRecipeCard({food}) {

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${food}`);
       setRecipe(response.data.meals[0]);
       console.log(setRecipe(response.data.meals[0]))

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchRecipes();
  }, [food]);

  return (
    <Card>
      <Card.Img src={recipe.strMealThumb} variant="top" />
      <Card.Body>
        <Card.Title>{recipe.strMeal}</Card.Title>
        
        <h3>Ingredients</h3>
        
      </Card.Body>
    </Card>
  )

}

export default FullRecipeCard;
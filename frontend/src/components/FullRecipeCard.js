import axios, * as others from 'axios';

// React Modules
import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

import '../App.css';


function FullRecipeCard({ food }) {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${food}`);
        setRecipe(response.data.meals[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchRecipe();
  }, [food]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <Card.Img src={recipe.strMealThumb} variant="top" style={{maxWidth:'400px',maxHeight:'400px'}}/>
      <Card.Body>
        <Card.Header>{recipe.strMeal}</Card.Header>
        <Card.Text>
          <strong>Category:</strong> {recipe.strCategory}<br />
          <strong>Cuisine:</strong> {recipe.strArea}<br />
          <strong>Instructions:</strong> {recipe.strInstructions}
        </Card.Text>
        <h3>Ingredients</h3>
        <ul>
          {[...Array(20)].map((_, i) => {
            const ingredient = recipe[`strIngredient${i + 1}`];
            const measure = recipe[`strMeasure${i + 1}`];
            return ingredient ? (
              <li key={i}>
                {ingredient} - {measure}
              </li>
            ) : null;
          })}
        </ul>
      </Card.Body>
    </Card>
  );
}

export default FullRecipeCard;
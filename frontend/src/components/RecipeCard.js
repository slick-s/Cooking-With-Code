// Modules
import axios, * as others from 'axios';

// React Modules
import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';


function RecipeCard({ country }) {

  const [recipes_, setRecipes] = useState([])
  const [description, setDecription] = useState([])

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
        const initStartingRecipes = response.data.meals // Array of Meal Objects
        for (let index = 0; index < initStartingRecipes.length; index++) {
          const desc = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${initStartingRecipes[index].idMeal}`)
          initStartingRecipes[index].desc = desc.data.meals[0].strInstructions
        }
        setRecipes(response.data.meals);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      {recipes_.map((recipe => {
        return (
          <Card key={recipe.idMeal} style={{ width: '18rem' }}>
            <Card.Img src={recipe.strMealThumb} variant="top" />
            <Card.Body>
              <Card.Title>{recipe.strMeal}</Card.Title>
              <Card.Text>{recipe.desc}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        )
      }))}
    </div>

  );
}

export default RecipeCard;
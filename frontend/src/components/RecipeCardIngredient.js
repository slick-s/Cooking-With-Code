// Modules
import axios, * as others from 'axios';

// React Modules
import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';



function RecipeCardIngredient({ category }) {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        setRecipes(response.data.meals);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchRecipes();
  }, [category]);

  return (
    <div>
      {recipes.map((recipe) => (
        <Card key={recipe.idMeal} style={{ width: '18rem' }}>
          <Card.Img src={recipe.strMealThumb} variant="top" />
          <Card.Body>
            <Card.Title>{recipe.strMeal}</Card.Title>
            <Button onClick={() => navigate(`/fullRecipe/${recipe.idMeal}`)} variant="primary">
              View Recipe
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default RecipeCardIngredient;
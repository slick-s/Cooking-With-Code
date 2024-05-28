// Modules
import axios, * as others from 'axios';

// React Modules
import React, { useEffect, useState } from 'react';
import { ReactDOM } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap';


function RecipeCard({country}) {

  const [recipes_, setRecipes] = useState([])
  const [description, setDecription] = useState([])
  
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
        setRecipes(response.data.meals);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const desc = async () => {
      try {
        const response = await axios.get(`www.themealdb.com/api/json/v1/1/lookup.php?i=${description}`);
        setDecription(response.data.meals);
      } catch (error) {
        console.error(error)
      }
    }

    desc()
    fetchRecipes();
  }, []);

  return (
    <div>
      {recipes_.map((recipe => {
        return (
          <Card key={recipe.idMeal} style={{ width: '18rem' }}>
            <Card.Img src={recipe.strMealThumb} variant="top"  />
            <Card.Body>
              
              <Card.Title>{recipe.strMeal}</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        )
      }))}
    </div>

  );
}

export default RecipeCard;
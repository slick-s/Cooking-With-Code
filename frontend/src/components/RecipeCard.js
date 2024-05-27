// Modules
import axios, * as others from 'axios';

// React Modules
import React, { useEffect, useState } from 'react';
import { ReactDOM } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap';


function RecipeCard({country}) {

  const [recipes_, setRecipes] = useState([])
  // const [country, setCountry] = useState('')
  
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
        setRecipes(response.data.meals);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchRecipes();
  }, []);

  // const countryChange = (e)=> {
  //   setCountry(e.target.value)
  // }

  return (
    <div>
      <h1>Recipes</h1>
      {recipes_.map((recipe => {
        return (
          <Card key={recipe.idMeal} style={{ width: '18rem' }}>
            <Card.Img src={recipe.strMealThumb} variant="top"  />
            <Card.Body>
              <Card.Title>{recipe.strMeal}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        )
      }))}
    </div>

  );
}

export default RecipeCard;
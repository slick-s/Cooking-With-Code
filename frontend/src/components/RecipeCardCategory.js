// Modules
import axios, * as others from 'axios';

// React Modules
import React, { useEffect, useState } from 'react';
import { ReactDOM } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap';


function RecipeCardCategory() {

  const [recipes_, setRecipes] = useState([])
  
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        setRecipes(response.data.categories);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchRecipes();
  }, []);
    
  return (
    <div>
      <h1>Home</h1>
      <div className='home-categories'>
      {recipes_.map((recipe => {
        return (
          <Card key={recipe.idCategory} style={{ width: '18rem' }}>
            <Card.Img src={recipe.strCategoryThumb} variant="top"  />
            <Card.Body>
              <Card.Title>{recipe.strCategory}</Card.Title>
              <Card.Text>{recipe.strCategoryDescription}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        )
      }))}
      </div>
    </div>

  );
}

export default RecipeCardCategory;
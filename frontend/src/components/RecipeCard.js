// Modules
import axios, * as others from 'axios';

// React Modules
import { React, useEffect, useState } from 'react';
import { Card, Button, Form, Col, Row, Toast, ToastContainer } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

//import "../App.css";
import '../styles.css';

function RecipeCard({ country }) {
  const [recipes_, setRecipes] = useState([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
      setRecipes(response.data.meals);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const addFavorite = async (recipe) => {
    const recipeData = { favorites: recipe };
    try {
      const response = await axios.post('http://localhost:5000/favorites', recipeData);
      console.log('POST response:', response.data);
    } catch (error) {
      console.error('Error posting favorite:', error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [country]);

  return (
    <div className='card-container'>
      {recipes_.map((recipe) => (
        <Form
          key={recipe.idMeal} // Add the key prop here
          onSubmit={(e) => {
            e.preventDefault();
            addFavorite(recipe.idMeal);
          }}
        >
          <Card style={{ width: '18rem' }}>
            <Card.Img src={recipe.strMealThumb} variant="top" />
            <Card.Body>
              <Card.Title>{recipe.strMeal}</Card.Title>
              <Card.Text></Card.Text>
              <Button onClick={() => navigate(`/fullRecipe/${recipe.idMeal}`)} variant="primary">
                View Recipe
              </Button>
              <br />
              <br />
              <Button
                variant='secondary'
                type='submit'
                onClick={() => {
                  setShow(true);
                }}
              >
                Add to Favorites
              </Button>
            </Card.Body>
          </Card>
        </Form>
      ))}
    </div>
  );
}

export default RecipeCard;
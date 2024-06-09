// Modules
import axios, * as others from 'axios';

// React Modules
import { React, useEffect, useState } from 'react';
import { Card, Button, Form, Col, Row, Toast, ToastContainer } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';


function RecipeCard({ country }) {
  const [recipes_, setRecipes] = useState([])
  const [show, setShow] = useState(false)
  const [position, setPosition] = useState('top-center');
  const navigate = useNavigate();

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
      const initStartingRecipes = response.data.meals // Array of Meal Objects
      /*         for (let index = 0; index < initStartingRecipes.length; index++) {
                const desc = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${initStartingRecipes[index].idMeal}`)
                initStartingRecipes[index].desc = desc.data.meals[0].strInstructions
              } */
      setRecipes(response.data.meals);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const addFavorite = async (recipe) => {
    const recipeData = {
      favorites: recipe
    }
    try {
      const response = await axios.post('http://localhost:5000/favorites', recipeData)
      toast.success('Added to favorites!', {
        duration: 3000,
      })
    } catch (error) {
      console.error(error)
      toast.error('Unable to add', {
        duration: 3000
      })
    }
  }

  useEffect(() => {
    fetchRecipes();
  }, [country]);

  return (
    <div>
      {recipes_.map((recipe => {
        return (
          <Form onSubmit={e => {
            e.preventDefault()
            addFavorite(recipe.idMeal)
          }}>
            <Card key={recipe.idMeal} style={{ width: '18rem' }}>
              <Card.Img src={recipe.strMealThumb} variant="top" />
              <Card.Body>
                <Card.Title>{recipe.strMeal}</Card.Title>
                <Card.Text></Card.Text>
                <Button onClick={() => navigate(`/fullRecipe/${recipe.idMeal}`)} variant="primary">
                  View Recipe
                </Button>
                <br />
                <br />
                <Button variant='secondary' type='submit' onClick={() => {
                  setShow(true)
                }}>Add to Favorites</Button>
              </Card.Body>
            </Card>
            <Toaster position='top-center'/>
          </Form>
        )
      }))}
    </div>

  );
}

export default RecipeCard;
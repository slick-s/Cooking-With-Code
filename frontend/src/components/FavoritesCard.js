// Modules
import axios, * as others from 'axios';

// React Modules
import { React, useEffect, useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

export default function FavoritesCard() {
    const [favorites, setFavorites] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();

    const getFavorites = async () => {
        try {
            const response = await axios.get('http://localhost:5000/favorites');
            setFavorites(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteFavorites = async (recipeIdMeal, fav_id) => {
        try {
            for (let i = 0; i < favorites.length; i++) {
                const element = favorites[i]
                if (element.favorites == recipeIdMeal) {
                    const response = await axios.delete(`http://localhost:5000/favorites/${element.fav_id}`)
                }
                console.log(element);
            }
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getFavorites();
    }, []);

    useEffect(() => {
        if (favorites.length > 0) {
            const getRecipeID = async () => {
                try {
                    const recipesData = [];
                    for (let index = 0; index < favorites.length; index++) {
                        const v = favorites[index].favorites;
                        console.log(v);
                        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${v}`);
                        recipesData.push(response.data.meals[0]);
                    }
                    setRecipes(recipesData);
                } catch (error) {
                    console.error(error);
                }
            };
            getRecipeID();
        }
    }, [favorites]);

    return (
        <div>
            {recipes.map((recipe => {
                return (
                    <Form>
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
                                <Button variant='danger' type='submit' onClick={() => {
                                    deleteFavorites(recipe.idMeal, favorites.fav_id)
                                }}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </Form>
                )
            }))}
        </div>
    )
}
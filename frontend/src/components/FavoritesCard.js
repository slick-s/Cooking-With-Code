// Modules
import axios, * as others from 'axios';

// React Modules
import { React, useEffect, useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';


export default function FavoritesCard() {
    const [favorites, setFavorites] = useState([]);
    const [recipes, setRecipes] = useState([]);

    const getFavorites = async () => {
        try {
            const response = await axios.get('http://localhost:5000/favorites');
            console.log(response);
            setFavorites(response.data);
        } catch (error) {
            console.error(error);
        }
    };

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
                                <Button variant="primary">Go somewhere</Button>
                                <br />
                                <Button variant='secondary' type='submit'>Add to Favorites</Button>
                            </Card.Body>
                        </Card>
                    </Form>
                )
            }))}
        </div>
    )
}
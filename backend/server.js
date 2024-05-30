// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')
const port = process.env.PORT

var corsOptions = {
    origin: "http://localhost:3000"
  };

// Middleware
app.use(cors(corsOptions))
app.use(express.json())

/* Controllers and Routes */

// CREATE/UPDATE - POST A NEW FAVORITE RECIPE
app.post('/favorites', async (req, res) => {
    try {
        const {favorites} = req.body
        const newRecipe = await pool.query('INSERT INTO favorite_recipes (favorites) VALUES ($1) RETURNING *', [favorites]);
        console.log(newRecipe);
        res.json(newRecipe.rows[0])
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
});

// READ - GET
app.get('/favorites', async (req, res) => {
    try {
        const favs = await pool.query('SELECT * FROM favorite_recipes')
        res.json(favs.rows)
    } catch (err) {
        console.log(err);
    }
})

app.get('/favorites/:id', async (req, res) => {
    try {
        const { id } = req.params
        const specificFav = await pool.query('SELECT * FROM favorite_recipes WHERE fav_id = ($1)', [id])
        res.json(specificFav.rows[0])
    } catch (err) {
        console.log(err);
    }
})

// DELETE - DELETE
app.delete('/favorites/:id', async (req, res) => {
    try {
        const {id} = req.params
        const deleteFavs = await pool.query('DELETE FROM favorite_recipes WHERE fav_id = ($1)', [id])
        res.send('Deleted')
    } catch (err) {
        console.log(err);
    }
})

// // Backend Server Port
app.listen(port, () => {
    console.log('Server Started!')
})



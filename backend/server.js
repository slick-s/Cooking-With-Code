// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')
const port = process.env.PORT
const methodOverride = require('method-override')

// Middleware
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 5000;
// QUERY METHODS


// Controllers and Routes
app.get("/api", async (req, res) => {
    try {
        const response = await fetch('www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    
        if (!response.ok){
            throw new Error('Failute connecting to API');
        }
    
        const data = await response.json();
        res.json(data);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
});

/* FAVORITES TABLE ROUTES */

// CREATE - POST A NEW FAVORITE RECIPE
app.post('/recipe', async (req, res) => {
    try {

        const { title, body} = req.body
        const newRecipe = await pool.query('INSERT INTO favorite_recipes (title, body) VALUES ($1) ($2) RETURNING *', [title,body]);
        console.log(newRecipe);
        res.json(newRecipe.rows[0]);

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

// UPDATE - PUT/PATCH
// app.put('/favorites/:id', async (req, res) => {
//     try {

        


//     } catch (err) {
//         console.log(err);
//     }
// })

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



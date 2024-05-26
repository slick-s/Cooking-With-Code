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

// QUERY METHODS


// Controllers and Routes
app.get("/api", async (req, res) => {
    res.send('Hello!')
})

/* FAVORITES TABLE ROUTES */

// CREATE - POST A NEW FAVORITE RECIPE
app.post('/favorites', async (req, res) => {
    try {

        const { favorites } = req.body
        const favs = await pool.query('INSERT INTO favorite_recipes (favorites) VALUES ($1) RETURNING *', [favorites])
        
        console.log(favorites);
        console.log(favs);

        res.json(favs.rows[0])

    } catch (err) {
        console.log(err);
    }
})

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



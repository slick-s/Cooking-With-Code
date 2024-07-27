// Modules and Globals
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const port = process.env.PORT || 5000;

const corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Allow cookies to be sent with the request
    optionsSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// CREATE/UPDATE - POST A NEW FAVORITE RECIPE
app.post('/favorites', async (req, res) => {
    try {
        const { favorites } = req.body;
        const newRecipe = await pool.query('INSERT INTO favorite_recipes (favorites) VALUES ($1) RETURNING *', [favorites]);
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
        const favs = await pool.query('SELECT * FROM favorite_recipes');
        res.json(favs.rows);
    } catch (err) {
        console.log(err);
    }
});

// DELETE - DELETE
app.delete('/favorites/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM favorite_recipes WHERE fav_id = ($1)', [id]);
        res.send('Deleted');
    } catch (err) {
        console.log(err);
    }
});

// Backend Server Port
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
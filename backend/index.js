const express = require('express');
const cors = require('cors');
const db = require('./db');
require('dotenv').config();

//Middleware
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

//ROUTES

//Home page
app.get('/api/data', async (req, res) => {
  try {
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

//Create a new recipe

//Get Breakfast recipe

//Get Lunch recipe

//Get Dinner recipe

//Update a recipe

// Delete a recipe

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
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
app.post("/newrecipe", async(req,res) =>{
    try{

    }catch(err){
        console.error(err.message);
    }
})

//Get all recipes 
app.get("/recipes", async(req,res) => {
    try{

    }catch(err){
        console.error(err.message)
    }
})
//Get Breakfast recipe
app.get("/recipes/:id/breakfast", async(req,res) => {
    try {
        
    } catch (error) {
        console.error(err.message)
    }
})
//Get Lunch recipe
app.get("/recipes/:id/lunch", async(req,res) => {
    try {
        
    } catch (error) {
        console.error(err.message)
    }
})

//Get Dinner recipe
app.get("/recipes/:id/dinner", async(req,res) => {
    try {
        
    } catch (error) {
        console.error(err.message)
    }
})

//Update a recipe
app.put("/recipes/:id", async(req,res) =>{
    try{

    }catch(error){
        console.error(err.message)
    }
})

// Delete a recipe
app.delete("/recipes/:id",async(req,res)=>{
    try{

    }catch(error){
        console.error(err.message)
    }
})
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
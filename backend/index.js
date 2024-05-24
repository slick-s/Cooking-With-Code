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
app.get('/api', async (req, res) => {
  try {
    res.send("hello world!")
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

//Create a new recipe
app.post("/newrecipe", async(req,res) =>{
    try{
        res.send("new recipes is working")
    }catch(err){
        console.error(err.message);
    }
})

//Get all recipes 
app.get("/recipes", async(req,res) => {
    try{
        res.send("all recipes should be displayed here")
    }catch(err){
        console.error(err.message)
    }
})
//Get Breakfast recipe
app.get("/recipes/breakfast", async(req,res) => {
    try {
        res.send("all breakfast recipes are here")
    } catch (error) {
        console.error(err.message)
    }
})
//Get Lunch recipe
app.get("/recipes/lunch", async(req,res) => {
    try {
        res.send("all lunch recipes are here")
    } catch (error) {
        console.error(err.message)
    }
})

//Get Dinner recipe
app.get("/recipes/dinner", async(req,res) => {
    try {
        res.send("all dinner recipes here")
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
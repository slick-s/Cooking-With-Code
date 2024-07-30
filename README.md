# Cooking-With-Code

## Description
This project serves as an online recipe book. This recipe book features different cusines from different countries and the user can favorite a recipe they like which automatically gets saved into their favorites category. In addition, if there is a recipe the user no longer wish to have in their favorites they are allowed to remove it from the favorites category.

## Demo
[Screenshot 2024-07-30 at 16-01-12 React App](https://github.com/user-attachments/assets/f2945bfb-9772-4040-8ff4-3c2c0ccbb604)
This demo shows a sample of the home page of what users will see followed by the categories of different meals for the user to look at. 

## Technologies 
- Backend: Node.js, Express!

- Database: Postgres
- Frontend: React, HTML, SCSS

## Technical Information
- Routes

| Method        |       Path    | Purpose  |
| ------------- | ------------- | -------- |
| GET           |   /favorites  | route to favorites|
| POST          | /favorites    | inserting a new recipe to the favorites|
| DELETE        | /favorites/:id| deletes a recipe from favorites|

## Issues
 There are some minor formatting issues as well as a module warning that needs to be addressed and fixed. 

 ## API Documentation

 https://www.themealdb.com/

 This api documentation provides the recipes that is in our database for users to look at. We specifically use this datebase to show cuisines from different countries. 

 ## Changelog

 ### [1.0.0] - 2024-05-16
#### Added
- Initial release of the project.
- Implemented user authentication.
- Set up the initial project structure.

### [1.0.1] - 2024-05-19
#### Added
- Starter code set up for backend
- Created a nav bar on frontend

### [1.0.2] - 2024-05-23
#### Fixed
- Fixed SQL queries
- Updated and modified the routers

### [1.0.3] - 2024-05-26
#### Added
-File is updated using axios

### [1.0.4] - 2024-05-27
#### Added
- Added API functionality

  #### Fixed
- Updated navbar functionality

### [1.0.6] - 2024-05-28
#### Added
-Added cards and API request to fetch data from TheMealDB

### [1.0.7] - 2024-05-30
#### Fixed
-Adjusted image size on recipe card
-Fixed CRUD operations, frontend and backend communication
- Adjusted styling issues

#### Added
-Added favorites functionality


## Collaborators
 - Wally Adams
 - Kayla Tapiador
 - Jaslin Lopez
 - Brandon Hernandez

 

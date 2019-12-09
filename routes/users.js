const express = require('express');
const router = express.Router();

//created userscontroller to be able to use the controllers js file
const usersController = require('../controllers/users');

//created a get route with the listUsers controller in the controllers file
router.get("/users", usersController.listUsers);

//created a get route with the showUser controller in the controllers file
router.get("/users/:id", usersController.showUser);

//created a post route with the createUser controller in the controllers file
router.post("/users", usersController.createUser);

//created a put route with the updateUser controller in the controllers file
router.put("/users/:id", usersController.updateUser);

//created a delete route with the deleteUser controller in the controllers file
router.delete("/users/:id", usersController.deleteUser);

//exported the router file in order to use it in the main index.js file
module.exports = router;
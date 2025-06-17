const express = require('express');
const dessertsController = require('../controllers/desserts.controller');
const dessertRoutes = express.Router();

dessertRoutes.get('/', dessertsController.getAllDesserts);
dessertRoutes.get('/:id', dessertsController.getDessertById);
dessertRoutes.post('/', dessertsController.createDessert);
dessertRoutes.patch('/:id', dessertsController.updateDessert);
// dessertRoutes.delete('/:id', usersController.deleteDessert);

module.exports = dessertRoutes;

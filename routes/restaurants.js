const express = require('express')
const router = express.Router()
const authController = require("../controllers/auth");
const restaurantController = require('../controllers/restaurants')
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//you already said the path is /restaurants in server.js so you don't need to put it here
router.get('/', ensureAuth, restaurantController.getRestaurants)
router.get('/:id', ensureAuth, restaurantController.editRestaurant)
router.get('/deleteRestaurant/:id', ensureAuth, restaurantController.deleteRestaurant)
//same thing, don't need to make it /restaurants/createRestaurant
router.post('/createRestaurant', ensureAuth, restaurantController.createRestaurant)
router.post('/save', ensureAuth, restaurantController.saveRestaurant)



module.exports = router
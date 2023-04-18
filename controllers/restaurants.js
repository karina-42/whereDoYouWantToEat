const Restaurant = require('../models/Restaurant.js')

module.exports = {
  getRestaurants: async (req, res) => {
    try {
      const restaurants = await Restaurant.find({user: req.user.id}).sort({name: 'asc'})
      res.render('restaurants.ejs', {title: 'Restaurants', restaurants: restaurants})
      
    } catch (error) {
      console.log(error);
    }
  },
  createRestaurant: async (req, res) => {
    try {
      await Restaurant.create({
        area: req.body.area,
        food: req.body.food,
        name: req.body.name,
        notes: req.body.notes,
        user: req.user.id,
      })
      res.redirect('/restaurants')
    } catch (error) {
      console.log(error);
    }
  },
  editRestaurant: async (req, res) => {
    try {
      const restaurant = await Restaurant.findById({_id: req.params.id})
      res.render('edit', {title: 'Edit', restaurant: restaurant})
    } catch (error) {
      console.log(error);
    }
  },
  saveRestaurant: async (req, res) => {
    try {
      let saveData = {
        $set: {
          name: req.body.restaurantName,
          area: req.body.restaurantArea,
          food: req.body.restaurantFood,
          notes: req.body.restaurantNotes
        }
      }
      await Restaurant.updateOne({_id: req.body.restaurantId}, saveData)
      res.redirect('/restaurants')
    } catch (error) {
      console.log(error);
    }
  },
  deleteRestaurant: async (req, res) => {
    try {
      await Restaurant.findByIdAndRemove({_id: req.params.id})
      res.redirect('/restaurants')
    } catch (error) {
      console.log(error);
    }
  }
}


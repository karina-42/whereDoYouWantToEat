const Restaurant = require("../models/Restaurant.js")

module.exports = {
  getChoose: async (req, res) => {
    try {
      //get Restaurant data
      const data = await Restaurant.find({user: req.user.id})
      res.render('choose.ejs', {title: 'Where do you want to eat?', data: data})
    } catch (error) {
      console.log(error);
    }
  },
  getRandomFood: async (req, res) => {
    try {
      const foods = await Restaurant.find({user: req.user.id})
      res.send(foods)
    } catch (error) {
      console.log(error);
    }
  },
  pickFood: async (req, res) => {
    try {
      let choice = await Restaurant.find({food: req.body.choice, user: req.user.id})
      res.render('suggestedRestaurants.ejs', {title: req.body.choice.toUpperCase(), choice: choice})
    } catch (error) {
      console.log(error);
    }
  }
}
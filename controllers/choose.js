const Restaurant = require("../models/Restaurant.js")
const ToEat = require("../models/ToEat.js")

module.exports = {
  getChoose: async (req, res) => {
    try {
      //get Restaurant data => return only food key info
      const foodList = await Restaurant.find({user: req.user.id}, "food").sort({food: 1})
      //get list of restaurants to eat at in the future
      const toEats = await ToEat.find({user: req.user.id})
      res.render('choose.ejs', {title: 'Where do you want to eat?', foodList: foodList, toEats: toEats})
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
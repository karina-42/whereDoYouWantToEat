# Where do you want to eat?
An app that stores a self-curated database of your favorite restaurants for when you can't think of anywhere to eat.

## Visit here: [Where do you want to eat?](https://where-do-you-want-to-eat.cyclic.app/)
## Demo login:
Demo Email: demo@demo.com

Demo password: 12345678

![screenshot1](https://res.cloudinary.com/dslxa2yhi/image/upload/v1682059994/portfolioReadmeScreenshots/wdywtescreen_e5lepz.png)

## Table of Contents
* [Introduction](#introduction)
* [Technologies](#technologies)
* [Lessons learned](#lessons-learned)
* [Improvements](#improvements)

## Introduction

This app allows you to create a list of your favorite restaurants and restaurants that you want to try in the future. You can add the location of the restaurant, what type of food it serves, and any particular notes or comments you may have about the restaurant.

![adding](https://res.cloudinary.com/dslxa2yhi/image/upload/v1682060136/portfolioReadmeScreenshots/wdywtescreen2_svtxog.png)

When you want to eat out but can't think of a place to eat at, please use this app. It will show you a list of restaurants that serve the type of food you select from a dropdown box. If you can't think of something to eat, the app can suggest a random food to you by pressing the button at the left of the screen.

![choosing](https://res.cloudinary.com/dslxa2yhi/image/upload/v1682060273/portfolioReadmeScreenshots/wdywtescreen3_gnuc5v.png)
![results](https://res.cloudinary.com/dslxa2yhi/image/upload/v1682060401/portfolioReadmeScreenshots/wdywtescreen4_pqyrqb.png)


## Technologies
Tech used: 
* JavaScript
* EJS
* Tailwind
* Node.js
* Express
* Mongo.DB
* Mongoose

Following the principals of MVC, I created the backend using the Node.js framework Express and Mongoose for Mongo.DB for the database.

## Lessons learned
I learned how to manipulate and display the data coming from Mongo.DB in both EJS and in a seperate Javascript file according to what was necessary.

## Improvements
- [ ] Changing the types of food input to a group of radial button would help when inputting a new restaurant
- [ ] Optimize the food suggestion randomizer to not repeat food if the button is pressed several times

[Back to top](#where-do-you-want-to-eat)
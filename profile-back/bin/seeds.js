// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const bcryptSalt = 10;
const Program = require("../models/Program");

mongoose
  .connect('mongodb://localhost/proyecto-final', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let users = []

User.collection.drop();


let programs = [
  {
    "name": "Prueba1",
    "description": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "duration": "3weeks",
    "popularity": 5,
    "picture": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
    "fee": 300
  },
  {
    "name": "Prueba2",
    "description": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "duration": "3weeks",
    "popularity": 5,
    "picture": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
    "fee": 300
  },
  {
    "name": "Prueba3",
    "description": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "duration": "3weeks",
    "popularity": 5,
    "picture": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
    "fee": 300
  },
  {
    "name": "Prueba4",
    "description": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
    "duration": "3weeks",
    "popularity": 5,
    "picture": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
    "fee": 300
  }
]

Program.collection.drop()

Promise.all([User.create(users), Program.create(programs),]).then(values => {
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
  .catch(err => {
    mongoose.disconnect()
    throw err
  })
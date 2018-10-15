const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Program = require("../models/Program");
const Data = require("../models/Data");

router.get('/allProjects', (req, res, next) => {
  Program.find()
    .then(response => 
      res.status(200).json(response))
    .catch(err => {
      res.json(err);
    })
});

router.get('/:id', (req, res, next) => {
  Program.findById(req.params.id)
    .then(response => 
      res.status(200).json(response))
    .catch(err => {
      res.json(err);
    })
});

router.post('/form', (req, res, next) => {
  const {edad, peso, estatura} = req.body;
  const newData = new Data ({
    edad,
    peso, 
    estatura,
  })

  newData.save(err =>{
    if (err) {
      res.status(400).json({ message: 'Saving user to database went wrong.' });
      return;
    }
    res.status(200).json(newData);
  })
})





module.exports = router;
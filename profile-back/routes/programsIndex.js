const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Program = require("../models/Program");

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

module.exports = router;
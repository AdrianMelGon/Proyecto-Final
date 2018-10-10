const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Program = require("../models/Program");

router.get('/:id', (req, res, next) => {
  Project.findById(req.params.id)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    })
});


module.exports = router;

const { Router } = require('express');
const Character = require('../models/Character');

module.exports = Router()

  .get('/', async (req, res) => {
    const characters = await Character.getAll();
    console.log('characters', characters);
    res.json(characters);
  });


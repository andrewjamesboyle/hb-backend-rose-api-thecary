const { Router } = require('express');
const { Quote } = require('../models/Quote');

module.exports = Router()

  .post('/', async (req, res, next) => {
    const newQuote = await Quote.insert(req.body);
    console.log('newQuote', newQuote);
    res.json(newQuote);
  });


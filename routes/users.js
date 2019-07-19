const express = require('express');

const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    res.json({ message: 'route not work'})
  })
  .post((req, res) => {
    res.json({ message: 'route not work'})
  });

router
  .route('/:id')
  .get((req, res) => {
    res.json({ message: 'route not work'})
  })
  .path((req, res) => {
    res.json({ message: 'route not work'})
  })
  .delete((req, res) => {
    res.json({ message: 'route not work'})
  });

module.exports = router;

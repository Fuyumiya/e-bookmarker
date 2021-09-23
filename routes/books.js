'use strict';
const express = require('express');
const router = express.Router();
const authenticationEnsurer = require('./authentication-ensurer');
const Book = require('../models/book');

router.get('/new', authenticationEnsurer, (req, res, next) => {
  res.render('new', { user: req.user });
});

router.post('/', authenticationEnsurer, (req, res, next) => {
  const updatedAt = new Date();
  Book.create({
    bookName: req.body.bookName.slice(0, 255),
    memo: req.body.memo,
    pageCount: req.body.pageCount,
    createdBy: req.user.id,
    updatedAt: updatedAt
  }).then((book) => {
    res.redirect('/books/' + book.bookName);
  });
});

router.get('/:bookName', authenticationEnsurer, (req, res, next) => {
  Book.findOne({
    where: {
      bookName: req.params.bookName
    },
    order: [['updatedAt', 'DESC']]
  }).then((book) => {    
    res.render('book', {
      book: book,
    });
  });
});

module.exports = router;
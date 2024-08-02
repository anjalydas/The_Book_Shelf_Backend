const express = require('express')
const { getAllBooks, updateABookById, deleteABookById, getABookById, addBook } = require('../controllers/booksController')
const bookRouter = express.Router()


bookRouter.get('/', getAllBooks)
bookRouter.get('/:bookId', getABookById)
  bookRouter.post('/', addBook )
  bookRouter.patch('/:bookId', updateABookById)
  bookRouter.delete('/:bookId', deleteABookById)
module.exports = bookRouter
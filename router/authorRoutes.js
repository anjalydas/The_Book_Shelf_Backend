const express = require('express')
const app = express();
const port = 3000;
const { getAllAuthors, updateAAuthorById, deleteAAuthorById, getAAuthorById, addAuthor} = require('../controllers/authorsControllers')
const authorRouter = express.Router();



authorRouter.get('/', getAllAuthors)
authorRouter.get('/:authorId', getAAuthorById)
authorRouter.post('/', addAuthor)
authorRouter.patch('/:authorId', updateAAuthorById)
authorRouter.delete('/:authorId', deleteAAuthorById)
module.exports = authorRouter
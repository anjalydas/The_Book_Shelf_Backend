const Book = require("../model/bookmodel");

const getAllBooks = async(req, res) => {
  try{
    const Books = await Book.find(req.query);
    console.log(req.query)
    res.json(Books)
  }
  catch (error) {
    res.status(500).send('Error fetching category');
}
  }
  const getABookById = async (req, res) => {
    try{
      const books = await Book.findById(req.params.bookId).exec();
        res.status(200).json(books)}
    
   catch(error){
    res.status(404).send('Book Not Found')
   }
}
  
  const addBook = async (req, res) => {
    try {
      const bookData = req.body;
      const book = new Book(bookData);
      await book.save();
      res.status(201).json(book);
    } catch (error) {
      res.status(400).send('Error adding book');
    }
  };
  
  const updateABookById = async (req, res) => {
    try {
      const updatedBook = await Book.findByIdAndUpdate(req.params.bookId, req.body, { new: true });
      if (!updatedBook) {
        return res.status(404).send('Book Not Found');
      }
      res.status(200).json(updatedBook);
    } catch (error) {
      res.status(400).send('Error updating book');
    }
  };
  
  const deleteABookById = async (req, res) => {
    try {
      const deletedBook = await Book.findByIdAndDelete(req.params.bookId);
      if (!deletedBook) {
        return res.status(404).send('Book Not Found');
      }
      res.status(200).send('Book deleted');
    } catch (error) {
      res.status(500).send('Error deleting book');
    }
  };
  module.exports = {getAllBooks, getABookById, addBook, updateABookById, deleteABookById}
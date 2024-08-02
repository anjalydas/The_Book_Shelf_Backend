const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema
    ({ image: String, 
        title: String,
        authorName: 
        {
            type: mongoose.ObjectId,
            ref: 'Author'
        },
        price: Number });
        
const Book = mongoose.model('book', bookSchema)
module.exports = Book
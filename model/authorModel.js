const mongoose = require('mongoose');
const authorSchema = new mongoose.Schema
    ({ authorName: String,
        image: String,
        description: String,
        authorCategory: String
    });
   

const Author = mongoose.model('Author', authorSchema)
module.exports = Author
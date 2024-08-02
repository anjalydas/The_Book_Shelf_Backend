const Author = require("../model/authorModel");

const getAllAuthors = async(req, res) => {
  try {
    const authors = await Author.find(req.query);
    res.json(authors);
} catch (error) {
    res.status(500).send('Error fetching authors');
}
};
  const getAAuthorById = async(req, res) => {
        try{
          const authors = await Author.findById(req.params.authorId).exec();
            res.status(200).json(authors)}
        
       catch(error){
        res.status(404).send('Author Not Found')
       }
    }
    const addAuthor = async(req, res) => {
    try{
        const AuthorData = req.body
        const authors = new Author(AuthorData)
        await authors.save()
        res.json(authors)
      }
        catch (error) {
          res.status(400).send('Error Adding Author');
        }
      }  
      const updateAAuthorById =async (req, res) => {
       try{
        const updateAuthor = await Author.findByIdAndUpdate(req.params.authorId, req.body, {new:true})
        res.json(updateAuthor)
       }
       catch{
        res.status(404).send("Author not Found")
       }
      }
      const deleteAAuthorById = (req, res) => {
        res.send('delete a author by id')
      }

    module.exports = {getAllAuthors, getAAuthorById, addAuthor, updateAAuthorById, deleteAAuthorById}
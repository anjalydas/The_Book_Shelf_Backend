const User = require("../model/userModel");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const getAllUsers = async(req, res) => {
  try {
    const users = await User.find(req.query);
    res.json(users);
} catch (error) {
    res.status(500).send('Error fetching users');
}
};
  const getAUserById = async(req, res) => {
        try{
          const users = await User.findById(req.params.UserId).exec();
            res.status(200).json(users)}
        
       catch(error){
        res.status(404).send('User Not Found')
       }
    }
    const addUser = async(req, res) => {
    try{
        const UserData = req.body
        const hash = bcrypt.hashSync(UserData.password, saltRounds);
        const users = new User({
          ...UserData, password: hash
        })
        await users.save()
        res.json(users)
      }
        catch (error) {
          res.status(400).send('Error Adding User');
        }
      }  
      const updateAUserById =async (req, res) => {
       try{
        const updateUser = await User.findByIdAndUpdate(req.params.UserId, req.body, {new:true})
        res.json(updateUser)
       }
       catch{
        res.status(404).send("User not Found")
       }
      }
      const deleteAUserById = (req, res) => {
        res.send('delete a User by id')
      }

    module.exports = {getAllUsers, getAUserById, addUser, updateAUserById, deleteAUserById}
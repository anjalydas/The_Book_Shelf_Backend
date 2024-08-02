const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../model/userModel")

 const login = async(req, res) => {
const {email, password} = req.body
const userId = await User.findOne({email:email})
if(!userId){
    return res.status(401).send("user not found")
}
const passwordMatch = bcrypt.compareSync(password, userId.password)
if(passwordMatch){
    const token = jwt.sign({_id: userId._id, email: userId.email}, '81581d8441d8daac7f318ef1a27849f258dbdedef8c7f69afd16f303e02af2fd4b406351ac8c3a343c501a5e7bf300930b4e40dc9224d14f057b2378b14fb534', {expiresIn: '1h'})
    res.cookie('token', token, { httpOnly: true })
    res.send("Login Success")
}
else{
    return res.status(401).send("Password does not Match")
}

 }
 const verifyLoggedIn = async(req, res) =>
    {
    if(req.cookies.token){
        res.sent("Logged In")
    }
    else{
        res.status(401).send("Unauthorised Access")
    }
    }
    const logout = async (req, res)=>{
        res.clearCookie('token')
        res.send("Logged Out")
    }
 module.exports = {
   login, verifyLoggedIn, logout
}
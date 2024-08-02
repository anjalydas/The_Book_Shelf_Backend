const express = require('express');


const {login, verifyLoggedIn, logout} = require('../controllers/authControllers');
const authRouter = express.Router();

authRouter.post('/login', login)
authRouter.get('/verify', verifyLoggedIn )
authRouter.get('/logout', logout)
module.exports = authRouter
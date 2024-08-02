const express = require('express')
const app = express();
const port = 3000;
const { getAllUsers, updateAUserById, deleteAUserById, getAUserById, addUser} = require('../controllers/usersControllers');
const userRouter = express.Router();



userRouter.get('/', getAllUsers)
userRouter.get('/:userId', getAUserById)
userRouter.post('/', addUser)
userRouter.patch('/:userId', updateAUserById)
userRouter.delete('/:userId', deleteAUserById)
module.exports = userRouter
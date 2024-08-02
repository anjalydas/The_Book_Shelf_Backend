require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const cors = require ('cors')
const bookRouter = require('./router/bookRoutes');
const authorRouter = require('./router/authorRoutes');
const userRouter = require('./router/userRoutes');
const authRouter = require('./router/authRoutes');
const app = express()
const port = 3000

app.use(cors(
  {credentials: true,
  origin: true}
))
app.use(express.json())
app.use(cookieParser());
app.use('/books', bookRouter)
app.use('/authors', authorRouter)
app.use('/users', userRouter)
app.use('/auth', authRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
main().then(()=> (console.log("connected"))).catch(err => console.log(err));

async function main() {
  await mongoose.connect('process.env.DB_URL');
}
const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/users')
const wordsRouter = require('./routes/words')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/user', userRouter)

app.use('/api/words', wordsRouter)

app.use((err, req, res, next) => {
  console.log(err.message)
  res.status(500).json({ message: err.message })
})

module.exports = app

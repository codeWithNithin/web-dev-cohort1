const express = require('express');
require('dotenv').config()

const apiRouter = require('./routes');
const { port } = require('./config/server.config');

const app = express();

const PORT = port

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRouter)

app.listen(3000, () => {
  console.log(`Server is running at port: ${PORT}`)
})
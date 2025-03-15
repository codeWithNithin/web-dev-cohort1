const express = require('express');
const userRouter = require('./user.routes');

const v1Router = express.Router()

// /api/v1/users
v1Router.use('/users', userRouter)

module.exports = v1Router;
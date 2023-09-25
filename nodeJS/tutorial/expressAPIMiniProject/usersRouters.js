const express = require('express');
const userController = require('./usersController');
const userRouter = express.Router();


userRouter.route('/').get(userController.getUsers).post(userController.createUser);

userRouter.route('/:id').get(userController.getUser);

module.exports = userRouter;

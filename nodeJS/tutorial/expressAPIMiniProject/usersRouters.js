const express = require('express');
const userController = require('./usersController');
const userRouter = express.Router();


userRouter.param('id',userController.userValidation)

userRouter.route('/').get(userController.getUsers).post(userController.createUserValidation,userController.createUser);

userRouter.route('/:id').get(userController.getUser);

module.exports = userRouter;

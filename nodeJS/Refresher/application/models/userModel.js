const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: false
    },
    age: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                if (validator.isEmail(value)) {
                    return true;
                }
                return false;

            },
            message: 'In-Correct email id'
        },
        unique: true
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return value.length > 10;
            },
            message: 'Password must be longer than 8 characters'
        }
    }
})



const UserModel = mongoose.model('users', UserSchema, 'users')

module.exports = UserModel;
const express = require('express'),
    app = express();
const UserModel = require('./models/userModel');
const bCrypt = require('bcrypt');


app.use(express.json());

app.post('/registerUser', async (req, res) => {
    try {
        const userWithSameEmail = await UserModel.findOne({ email: req.body.email })
        if (userWithSameEmail) {
            res.status(201).json('Email ID already registered')
        } else {
            const { password } = req.body;
            const hashPassword = await bCrypt.hash(password, 12)
            req.body.password = hashPassword;
            const user = new UserModel(req.body);
            const saveUser = await user.save();
            res.send(`User added successfully ${JSON.stringify(saveUser)}`)
        }
    } catch (err) {
        res.status(404).json({
            'error': err.message
        })
    }
})

app.get('/getAllUsers', async (req, res) => {
    const users = await UserModel.find({}).lean();
    const safeUsers = users.map(({ _id, __v, ...rest }) => rest);
    console.log(safeUsers);
    res.status(200).json(safeUsers)
})

module.exports = { app }
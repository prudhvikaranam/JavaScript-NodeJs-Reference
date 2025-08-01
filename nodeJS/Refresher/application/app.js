const express = require('express'),
    app = express();
const UserModel = require('./models/userModel');
const bCrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());

// Register user
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
            res.send(`${saveUser.firstName} ${saveUser.lastName} you have been successfully Registered.`)
        }
    } catch (err) {
        res.status(404).json({
            'error': err.message
        })
    }
})


// Login user
app.post('/login', async (req, res) => {

    try {
        const { email, password } = req.body;
        const getUser = await UserModel.findOne({ email }).lean();


        if (!getUser) {
            res.status(404).send("User Not found");
        }
        const passwordMatched = await bCrypt.compare(password, getUser.password);
        console.log('Prudhvi user', passwordMatched);
        if (!passwordMatched) {
            res.status(404).send('Passwords do not match, please try again or Request to password change');
        }

        const token = jwt.sign({ id: getUser._id.toString() }, 'P@ssw0rd#123', { expiresIn: '1h' });

        res.cookie('token', `${token}`, { expires: new Date(Date.now() + 900000) });

        res.status(200).json({
            'status': 'success',
            'message': `${getUser.firstName} ${getUser.lastName} have logged-in successfully!!!`,
            'token': token
        })


    } catch (err) {
        res.status(404).json({ "error": err })
    }
})


// Get my profile

app.get('/profile', async (req, res) => {
    const { token } = req.cookies;


    if (!token) {
        res.status(400).send('Token not available');
        return
    }
    let decoded;
    try {
        decoded = jwt.verify(token, 'P@ssw0rd#123');
    } catch (err) {
        res.status(400).send('Invalid token');
        return
    }

    const user = await UserModel.findOne({ _id: decoded.id }).lean();
    res.send(user)
})

// Get all users

app.get('/getAllUsers', async (req, res) => {
    const users = await UserModel.find({}).lean();
    const safeUsers = users.map(({ _id, __v, ...rest }) => rest);
    res.status(200).json(safeUsers)
})

module.exports = { app }
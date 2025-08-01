const express = require('express'),
    app = express();
const UserModel = require('./models/userModel');
const bCrypt = require('bcrypt');


app.use(express.json());

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
        const { _id, __v, ...safeUser } = getUser;


        if (!getUser) {
            res.status(404).send("User Not found");
        }
        const passwordMatched = await bCrypt.compare(password, getUser.password);
        console.log('Prudhvi user', passwordMatched);
        if (!passwordMatched) {
            res.status(404).send('Passwords do not match, please try again or Request to password change');
        }


        console.log('Prudhvi safeUser', safeUser);


        res.status(200).json({
            'status': 'success',
            'message': `${safeUser.firstName} ${safeUser.lastName} have logged-in successfully!!!`
        })


    } catch (err) {
        res.status(404).json({ "error": err })
    }
})




// Get all users

app.get('/getAllUsers', async (req, res) => {
    const users = await UserModel.find({}).lean();
    const safeUsers = users.map(({ _id, __v, ...rest }) => rest);
    console.log(safeUsers);
    res.status(200).json(safeUsers)
})

module.exports = { app }
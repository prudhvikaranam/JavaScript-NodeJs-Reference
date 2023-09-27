exports.userValidation = (req, res, next, value) => {
    if (value > 10) {
        return res.status(404).json({
            "message": "Id is not valid"
        })
    } else {
        next();
    }
}

exports.createUserValidation = (req, res, next) => {
    if (!req.body.userName) {
        return res.status(404).json({
            "message": "Body property is not valid"
        })
    } else {
        next();
    }

}

exports.getUsers = (req, res) => {
    res.status(200).json({
        "users": [
            {
                "user": "Iron Man"
            },
            {
                "user": "Thor"
            },
            {
                "user": "Black Panther"
            },
            {
                "user": "Hulk"
            },
            {
                "user": "Groot"
            }
        ]
    })
}

exports.createUser = (req, res) => {
    res.status(200).json({
        "status": `${req.body.userName} has been added to the Users list!!!`
    })
}

exports.getUser = (req, res) => {
    res.status(200).json({
        "users": [
            {
                "user": `${req.params.id}`
            }
        ]
    })
}
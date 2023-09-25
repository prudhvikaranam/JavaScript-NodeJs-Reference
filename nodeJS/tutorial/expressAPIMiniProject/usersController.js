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
                "user" : "Groot"
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
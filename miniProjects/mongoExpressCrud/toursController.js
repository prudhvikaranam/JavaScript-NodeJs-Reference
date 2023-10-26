const toursModel = require('./toursModel');

exports.getTours = (req, res) => {

    toursModel.find().then((data) => {
        res.status(200).json({
            'status' : 'Success',
            'data' : data
        })
    }).catch((err) => {
        res.status(500).json({
            status: 'error',
            message : err
        })
    })
}
exports.postTours = (req, res) => {
    res.status(200).json({
        'status': `${JSON.stringify(req.body)} Total Tours are 100`
    })
}

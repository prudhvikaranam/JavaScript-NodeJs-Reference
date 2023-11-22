const toursModel = require('./toursModel');

exports.getTours = (req, res) => {

    toursModel.find().then((data) => {
        res.status(200).json({
            'status': 'Success',
            'totalTours': data.length,
            'data': data
        })
    }).catch((err) => {
        res.status(500).json({
            status: 'error',
            message: err
        })
    })
}
exports.postTours = (req, res) => {
    console.log(`Request`, req.body);
    toursModel.create(req.body).then((data) => {
        res.status(200).json({
            'status': `Success`,
            'data': `${JSON.stringify(data)}`
        })
    }).catch((err) => {
        res.status(500).json({
            'status': `Error occurred while saving`,
            'Error': err
        })
    })
}

exports.getfilteredData = async (req, res) => {
    console.log(`Request`, req.query);

    // toursModel.find(req.query).then((data) => { // Using filter method.
    //     console.log(`Data ${data}`);
    //     res.status(200).json({
    //         'status': 'Success',
    //         'totalTours': data.length,
    //         'data': data
    //     })
    // }).catch((err) => {
    //     res.status(200).json({
    //         status: 'errorr',
    //         message: err
    //     })
    // })

    const tours = await toursModel.find().where('rating').equals(3);//Using where clause
    res.status(200).json({
        'status': 'Success',
        'totalTours': tours.length,
        'data': tours
    })
}
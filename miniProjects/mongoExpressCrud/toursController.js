exports.getTours = (req, res) => {
    res.status(200).json({
        'status': 'GET:::::Total Tours are 100'
    })
}
exports.postTours = (req, res) => {
    res.status(200).json({
        'status': `${JSON.stringify(req.body)} Total Tours are 100`
    })
}

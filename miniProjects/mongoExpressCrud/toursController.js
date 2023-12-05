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
    // console.log(`Request`, req.body);
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
    try {
        // BUILD QUERY
        let query = { ...req.query };
        // Excluding unwanted filters
        let advancedFilterQueries = ['limit', 'page', 'sort'];
        advancedFilterQueries.forEach((queries) => { delete query[queries] })



        // ADVANCED FILTERING
        //  URl --> http://127.0.0.5:8080/tours/ratings?rating[gte]=4&limit=4&page=1
        let advancedFilter = JSON.stringify(query);
        advancedFilter = advancedFilter.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
        advancedFilter = JSON.parse(advancedFilter);
        // // console.log(`Advanced filter ${JSON.stringify(advancedFilter)}`);

        // From the below, we are trying to build find query and also storing the find query on the toursQuery variable.... toursModel.find() will be giving an query hence we are able to add sort method on that and then finally we are triggeting (await toursQuery) the toursQuery on the executing phase which will trigger the find query and fetch the results into tours variable.

        let toursQuery = toursModel.find(advancedFilter);
        // console.log(`toursQuery before Sorting --- ${toursQuery}`);

        // Sorting
        // http://127.0.0.5:8080/tours/ratings?rating[gte]=3&sort=price&page=1 // By default ascending order, add - in front of 3 for descending order
        if (req.query.sort) {
            // toursQuery = toursQuery.sort(req.query.sort);
            // if we are having multiple sorts then we separate the string with ,
            // http://127.0.0.5:8080/tours/ratings?rating[gte]=3&sort=price,rating&page=1
            let sortBy = req.query.sort.split(',').join(' ');
            toursQuery = toursQuery.sort(sortBy);
        } else {
            toursQuery = toursQuery;
        }


        // Limiting fields
        // this can be used if we want to retrieve only specific fields.

        if (req.query.fields) {
            let fields = req.query.fields.split(',').join(' ');
            // console.log(`Fields ${fields}`);
            toursQuery = toursQuery.select(fields);
        } else {
            toursQuery = toursQuery;
        }

        // console.log(`toursQuery after limiting fields --- ${toursQuery}`);



        // EXECUTE QUERY
        // Query should be like this --> { rating: { '$gte': '4' } }, { 'place': 1 }
        const tours = await toursQuery; 
        // const tours = await toursModel.find({ rating: { '$gte': '4' } }, { 'place': 1 });
        // console.log(`toursQuery ${toursQuery}`);
        console.log(`Tours ${tours}`);
        res.status(200).json({
            'status': 'Success',
            'totalTours': tours.length,
            'data': tours
        })


        // const tours = await toursModel.find().where('rating').equals(3);//Using where clause
        // res.status(200).json({
        //     'status': 'Success',
        //     'totalTours': tours.length,
        //     'data': tours
        // })
    } catch (error) {
        res.status(200).json({
            status: 'errors',
            message: error
        })
    }

}
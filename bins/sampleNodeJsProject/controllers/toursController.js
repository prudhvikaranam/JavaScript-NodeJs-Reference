// Route Handlers (Controllers)

const tourModel = require("./../models/tourModel");

const fs = require("fs");

getAllTours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours.json`)
);

module.exports.allTours = (req, res) => {
  // tourModel
  //   .find()
  //   .then((data) => {
  //     res.status(200).json({
  //       status: "success",
  //       length: data.length,
  //       data: {
  //         message: data,
  //       },
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  tourModel.deleteMany();
};

module.exports.postTour = async (req, res) => {
  // Approach one
  // const newTour =  new tourModel(req.body)
  // newTour.save().then((data) => {
  //   res.send(data);
  // }).catch((err) => {
  //   res.send(err);
  // })

  // or below

  // const newTour1 = await new tourModel(req.body).save();
  // console.log(newTour1);

  // Approach two

  const newTour = await tourModel.create(req.body);
  console.log(newTour);
};

module.exports.getTour = async (req, res) => {
  try {
    const getTour = await tourModel.findById(req.params.id);
    console.log(getTour);
    
    if(getTour === null){
      throw 'Some error occured'
      return;
    }
    res.status(200).json({
      status: "success",
      data: {
        message: getTour,
      },
    });
  }catch(err){
    res.status(400).json({
      status: "failed",
      data: {
        message: err,
      },
    });
  }
};



module.exports.updateTour = async (req,res) => {
   try{
      const updateTour = await tourModel.findByIdAndUpdate(req.params.id, req.body, {
        new :true,
        runValidators : true
      })
      res.status(200).json({
        status: "failed",
          data: {
          message: updateTour,
        }
      })
   }catch(err){

   }
}
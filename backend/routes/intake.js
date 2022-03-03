const express = require("express");
const router = express.Router();
const IntakeModel = require('../models/intake');

//get route for intake model
  router.get('/', (req, res, next) => {
    IntakeModel.find((error, data) => {
        if (error) {
          return next(error);
        } else if (data === null) {
          res.status(404).send('intake document not found.');
        }
        else {
          res.json(data);
        }
    }).sort({ modifyAt: -1 });
  });
  
  //get route for intake model by specific id
  router.get('/:id', (req, res, next) => {
    IntakeModel.find({ clientId: req.params.id }, (error, data) => {
        if (error) {
            return next(error);
        }
        else if (data === null) {
            res.status(404).send('intake info  not found');
        }
        else {
            res.json(data);
        }
    }).sort({ modifyAt: -1 });     // Only return the latest document
});

  //post route for intake model
  router.post('/', (req, res, next) => {
    IntakeModel.create(req.body, (error, data) => {
        if (error) {
          console.log('A');
          return next(error)
        } else {
          console.log('B');
          res.send('intake info is added to the database');
        }
    });
  });

  //update route for intake model
  router.put('/:id', (req, res, next) => {
    IntakeModel.findOneAndUpdate({clientId: req.params.id}, {$set:req.body}, (error,data) => {
        if (error) {
          return next(error);
        } else if (data === null){
            res.status(404).send('intake info not found');
        } else {
          res.send(data,'intake info is updated in the database');
        }
    }).sort({ modifyAt: -1});
  });

  //delete route for intake model
  router.delete('/:id', (req, res, next) => {
    IntakeModel.deleteOne({ clientId: req.params.id }, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.status(200).json({
            msg: data});
        }
    });
  });


router.delete('/intakeId/:id', (req, res, next) => {
      IntakeModel.deleteOne({ _id: req.params.id }, (error, data) => {
        if (error) {
            return next(error);
        }
        else {
            res.status(200).json({
                msg: data
            });
        }
    });
});

module.exports = router;
const express = require("express");
const router = express.Router();
const HealthModel = require('../models/health');

//get route for health model
  router.get('/', (req, res, next) => {
    HealthModel.find((error, data) => {
        if (error) {
          return next(error);
        } else if (data === null) {
          res.status(404).send('health document not found.');
        }
        else {
          res.json(data);
        }
    }).sort({ modifyAt: -1 });
  });
  
  //get route for health model by specific id
  router.get('/:id', (req, res, next) => {
    HealthModel.find({ clientId: req.params.id }, (error, data) => {
        if (error) {
            return next(error);
        }
        else if (data === null) {
            res.status(404).send('health info  not found');
        }
        else {
            res.json(data);
        }
    }).sort({ modifyAt: -1 });     // Only return the latest document
});

  //post route for health model
  router.post('/', (req, res, next) => {
    HealthModel.create(req.body, (error, data) => {
        if (error) {
          console.log('A');
          return next(error)
        } else {
          console.log('B');
          res.send('health info is added to the database');
        }
    });
  });

  //update route for health model
  router.put('/:id', (req, res, next) => {
    HealthModel.findOneAndUpdate({clientId: req.params.id}, {$set:req.body}, (error,data) => {
        if (error) {
          return next(error);
        } else if (data === null){
            res.status(404).send('health info not found');
        } else {
          res.send('health info is updated in the database');
        }
    }).sort({ modifyAt: -1});
  });

  //delete route for health model
  router.delete('/:id', (req, res, next) => {
    HealthModel.deleteOne({ clientId: req.params.id }, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.status(200).json({
            msg: data});
        }
    });
  });

//delete route by healthId
router.delete('/healthId/:id', (req, res, next) => {
  HealthModel.deleteOne({ _id: req.params.id }, (error, data) => {
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
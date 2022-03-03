const express = require("express");
const router = express.Router();
const FamilyModel = require('../models/family');

//get route for Family model
  router.get('/', (req, res, next) => {
    FamilyModel.find((error, data) => {
        if (error) {
          return next(error);
        } else if (data === null) {
          res.status(404).send('Family document not found.');
        }
        else {
          res.json(data);
        }
    }).sort({ modifyAt: -1 });
  });
  
  //get route for Family model by specific id
  router.get('/:id', (req, res, next) => {
    FamilyModel.find({ clientId: req.params.id }, (error, data) => {
        if (error) {
            return next(error);
        }
        else if (data === null) {
            res.status(404).send('Family info  not found');
        }
        else {
            res.json(data);
        }
    }).sort({ modifyAt: -1 });     // Only return the latest document
});

  //post route for Family model
  router.post('/', (req, res, next) => {
    FamilyModel.create(req.body, (error, data) => {
        if (error) {
          console.log('A');
          return next(error)
        } else {
          console.log('B');
          res.send('Family info is added to the database');
        }
    });
  });

  //update route for Family model
  router.put('/:id', (req, res, next) => {
    FamilyModel.findOneAndUpdate({clientId: req.params.id}, {$set:req.body}, (error,data) => {
        if (error) {
          return next(error);
        } else if (data === null){
            res.status(404).send('Family info not found');
        } else {
          res.send(data,'Family info is updated in the database');
        }
    }).sort({ modifyAt: -1});
  });

  //delete route for Family model
  router.delete('/:id', (req, res, next) => {
    FamilyModel.deleteOne({ clientId: req.params.id }, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.status(200).json({
            msg: data});
        }
    });
  });


router.delete('/familyId/:id', (req, res, next) => {
      FamilyModel.deleteOne({ _id: req.params.id }, (error, data) => {
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
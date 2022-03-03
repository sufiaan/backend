const express = require("express");
const router = express.Router();
const eventModel = require('../models/event');

//get route for event model
  router.get('/', (req, res, next) => {
    eventModel.find((error, data) => {
        if (error) {
          return next(error);
        } else if (data === null) {
          res.status(404).send('event document not found.');
        }
        else {
          res.json(data);
        }
    }).sort({ modifyAt: -1 });
  });
  
  //get route for event model by specific id
  router.get('/:id', (req, res, next) => {
    eventModel.find({ _id: req.params.id }, (error, data) => {
        if (error) {
            return next(error);
        }
        else if (data === null) {
            res.status(404).send('event info  not found');
        }
        else {
            res.json(data);
        }
    }).sort({ modifyAt: -1 });     // Only return the latest document
});

  //post route for event model
  router.post('/', (req, res, next) => {
    eventModel.create(req.body, (error, data) => {
        if (error) {
          console.log('A');
          return next(error)
        } else {
          console.log('B');
          res.send('event info is added to the database');
          console.log('Event successfully Added!', data)
        }
    });
  });

  //update route for event model
  router.put('/:id', (req, res, next) => {
    eventModel.findOneAndUpdate({_id: req.params.id}, {
        $set: req.body
      }, (error,data) => {
        if (error) {
          return next(error);
        } else if (data === null){
            res.status(404).send('event info not found');
        } else {
            res.send('Event is edited via PUT');
            console.log('Event successfully updated!', data)
        }
    }).sort({ modifyAt: -1});
  });

  //delete route for event model
  router.delete('/:id', (req, res, next) => {
    eventModel.deleteOne({ _id: req.params.id }, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.status(200).json({
            msg: data});
        }
    });
  });

module.exports = router;
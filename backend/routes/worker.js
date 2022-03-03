const express = require("express");
const router = express.Router();
const WorkerModel = require('../models/worker');

//get route for worker model
  router.get('/', (req, res, next) => {
    WorkerModel.find((error, data) => {
        if (error) {
          return next(error);
        } else if (data === null) {
          res.status(404).send('worker document not found.');
        }
        else {
          res.json(data);
        }
    }).sort({ modifyAt: -1 });
  });
  
  //get route for worker model by specific id
  router.get('/:id', (req, res, next) => {
    WorkerModel.find({ clientId: req.params.id }, (error, data) => {
        if (error) {
            return next(error);
        }
        else if (data === null) {
            res.status(404).send('worker info  not found');
        }
        else {
            res.json(data);
        }
    }).sort({ modifyAt: -1 });     // Only return the latest document
});

  //post route for worker model
  router.post('/', (req, res, next) => {
    WorkerModel.create(req.body, (error, data) => {
        if (error) {
          console.log('A');
          return next(error)
        } else {
          console.log('B');
          res.send('worker info is added to the database');
        }
    });
  });

  //update route for worker model
  router.put('/:id', (req, res, next) => {
    WorkerModel.findOneAndUpdate({clientId: req.params.id}, {$set:req.body}, (error,data) => {
        if (error) {
          return next(error);
        } else if (data === null){
            res.status(404).send('worker info not found');
        } else {
          res.send(data,'worker info is updated in the database');
        }
    }).sort({ modifyAt: -1});
  });

  //delete route for worker model
  router.delete('/:id', (req, res, next) => {
    WorkerModel.deleteOne({ clientId: req.params.id }, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.status(200).json({
            msg: data});
        }
    });
  });


router.delete('/workerId/:id', (req, res, next) => {
      WorkerModel.deleteOne({ _id: req.params.id }, (error, data) => {
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
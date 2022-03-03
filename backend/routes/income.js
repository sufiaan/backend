const express = require("express");
const router = express.Router();
const IncomeModel = require('../models/income');

//get route for income model
  router.get('/', (req, res, next) => {
    IncomeModel.find((error, data) => {
        if (error) {
          return next(error);
        } else if (data === null) {
          res.status(404).send('Income document not found.');
        }
        else {
          res.json(data);
        }
    }).sort({ modifyAt: -1 });
  });
  
  //get route for income model by specific id
  router.get('/:id', (req, res, next) => {
    IncomeModel.find({ clientId: req.params.id }, (error, data) => {
        if (error) {
            return next(error);
        }
        else if (data === null) {
            res.status(404).send('Income info  not found');
        }
        else {
            res.json(data);
        }
    }).sort({ modifyAt: -1 });     // Only return the latest document
});

  //post route for income model
  router.post('/', (req, res, next) => {
    IncomeModel.create(req.body, (error, data) => {
        if (error) {
          console.log('A');
          return next(error)
        } else {
          console.log('B');
          res.send('income info is added to the database');
        }
    });
  });

  //update route for income model
  router.put('/:id', (req, res, next) => {
    IncomeModel.findOneAndUpdate({clientId: req.params.id}, {$set:req.body}, (error,data) => {
        if (error) {
          console.log('a')
          return next(error);
        } else if (data === null){
          console.log('b')
            res.status(404).send('Income info not found');
        } else {
          console.log('c')
          res.json('income info is updated in the database');
        }
    }).sort({ modifyAt: -1});
  });

  //delete route for income model
  router.delete('/:id', (req, res, next) => {
    IncomeModel.deleteOne({ clientId: req.params.id }, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.status(200).json({
            msg: data});
        }
    });
  });


router.delete('/incomeId/:id', (req, res, next) => {
    IncomeModel.deleteOne({ _id: req.params.id }, (error, data) => {
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
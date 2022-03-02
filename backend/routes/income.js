const express = require("express");
const router = express.Router();
const IncomeModel = require('../models/income');

  router.get('/income', (req, res, next) => {
    IncomeModel.find((error, data) => {
        if (error) {
          return next(error, "Error inserting data.");
        } else if (data === null) {
          res.status(404).send('Income document not found.');
        }
        else {
          res.send(data,'Income info is added to the database');
        }
    });
  });

  router.post('/income', (req, res, next) => {
    IncomeModel.create(req.body, (error, data) => {
        if (error) {
          return next(error, "Error inserting data.")
        } else {
          res.send(data,'income info is added to the database');
        }
    });
  });

  router.put('/income', (req, res, next) => {
    FamilyModel.create(req.body, (error, data) => {
        if (error) {
          return next(error, "Error updating data.")
        } else {
          res.send(data,'income info is updated in the database');
        }
    });
  });

  router.delete('/income', (req, res, next) => {
    FamilyModel.create(req.body, (error, data) => {
        if (error) {
          return next(error, "Error removing data.")
        } else {
          res.send(data,'income info is removed from the database');
        }
    });
  });
  module.exports = router;
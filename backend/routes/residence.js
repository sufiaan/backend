const express = require("express");
const router = express.Router()
const residenceModel = require('../models/residence');


router.post('/', (req, res, next) => {
    residenceModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        }
        else {
            res.send('Client contact education info is added to the database.');
        }
    });
});



router.get('/', (req, res, next) => {
    residenceModel.find((error, data) => {
        if (error) {
            return next(error);
        }
        else if (data === null) {
            res.status(404).send('Client doc  not found');
        }
        else {
            res.json(data);
        }
    }).sort({ modifyAt: -1 });  
});


router.get('/:id', (req, res, next) => {
    residenceModel.find({ clientId: req.params.id }, (error, data) => {
        if (error) {
            return next(error);
        }
        else if (data === null) {
            res.status(404).send('Client not found');
        }
        else {
            res.json(data);
        }
    }).sort({ modifyAt: -1 });     // Only return the latest document
});


router.delete('/:id', (req, res, next) => {
    residenceModel.remove({ clientId: req.params.id }, (error, data) => {
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

module.exports = router
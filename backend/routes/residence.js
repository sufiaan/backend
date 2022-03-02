const express = require("express");
const router = express.Router()
const residenceModel = require('../models/residence');


router.post('/', (req, res, next) => {
    residenceModel.create(req.body, (error, data) => {
        if (error) {
            return next(error,"Error in inserting data");
        }
        else {
            res.send('Residence info added to database');
        }
    });
});


router.get('/', (req, res, next) => {
    residenceModel.find((error, data) => {
        if (error) {
            return next(error);
        }
        else if (data === null) {
            res.status(404).send('Residence info not found');
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
            res.status(404).send('Residence info  not found');
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

router.delete('/residenceId/:id', (req, res, next) => {
    residenceModel.remove({ _id: req.params.id }, (error, data) => {
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
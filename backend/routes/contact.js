const express = require("express");
const router = express.Router()
const contactModel = require('../models/contact');


router.post('/', (req, res, next) => {
    contactModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        }
        else {
            res.send('Contact  info is added to the database.');
        }
    });
});



router.get('/', (req, res, next) => {
    contactModel.find((error, data) => {
        if (error) {
            return next(error);
        }
        else if (data === null) {
            res.status(404).send('Contact not found');
        }
        else {
            res.json(data);
        }
    }).sort({ modifyAt: -1 });  
});


router.get('/:id', (req, res, next) => {
    contactModel.find({ clientId: req.params.id }, (error, data) => {
        if (error) {
            return next(error);
        }
        else if (data === null) {
            res.status(404).send('Contact not found');
        }
        else {
            res.json(data);
        }
    }).sort({ modifyAt: -1 });     // Only return the latest document
});


router.delete('/:id', (req, res, next) => {
    contactModel.remove({ clientId: req.params.id }, (error, data) => {
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
// DELETE: an endpoint to delete a client contact by contactId id.
router.delete('/contactId/:id', (req, res, next) => {
    contactModel.remove({ _id: req.params.id }, (error, data) => {
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
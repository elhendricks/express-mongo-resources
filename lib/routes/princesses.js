const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Princess = require('../models/princess');
const crudHandler = require('../crud-handler');

router
    .get('/', (req, res, next) => {
        crudHandler.getAll(req, res, next, Princess);
    })

    .get('/:id', (req, res, next) => {
        crudHandler.getById(req, res, next, Princess);
    })

    .delete('/:id', (req, res, next) => {
        crudHandler.deleteById(req, res, next, Princess);
    })

    .post( '/', bodyParser, (req, res, next) => {
        crudHandler.add(req, res, next, Princess);
    })

    .put('/:id', bodyParser, (req, res, next) => {
        crudHandler.update(req, res, next, Princess);
    });

module.exports = router;
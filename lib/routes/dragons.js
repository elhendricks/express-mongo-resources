const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Dragon = require('../models/dragon');
const crudHandler = require('../crud-handler');

router
    .get('/', (req, res, next) => {
        crudHandler.getAll(req, res, next, Dragon);
    })

    .get('/:id', (req, res, next) => {
        crudHandler.getById(req, res, next, Dragon);
    })

    .delete('/:id', (req, res, next) => {
        crudHandler.deleteById(req, res, next, Dragon);
    })

    .post( '/', bodyParser, (req, res, next) => {
        crudHandler.add(req, res, next, Dragon);
    })

    .put('/:id', bodyParser, (req, res, next) => {
        crudHandler.update(req, res, next, Dragon);
    });

module.exports = router;
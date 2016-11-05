const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Dragon = require('../models/dragon');

router
    .get('/', (req, res, next) => {
        //{} gets all
        const query = {};
        
        for (var key in req.query) {
            query[key] = req.query[key];
        }

        Dragon.find(query)
            .then(dragons => res.send(dragons))
            .catch(next);
    
    })

    .get('/:id', (req, res, next) => {
        Dragon.findById(req.params.id)
        .then(dragon => {
            res.send(dragon);
        })
        .catch(next);
    })

    .delete('/:id', (req, res, next) => {
        Dragon.findByIdAndRemove(req.params.id)
        .then(deleted => {
            res.send(deleted);
        })
        .catch(next);
    })

    .post( '/', bodyParser, (req, res, next) => {
        new Dragon(req.body).save()
        .then(saved => {
            res.send(saved);})
        .catch(next);
    })

    .put('/:id', bodyParser, (req, res, next) => {
        Dragon.findByIdAndUpdate(req.params.id, req.body, {new: true})

            .then(saved => {
                res.send(saved);
            })
            .catch(next);

    });

module.exports = router;
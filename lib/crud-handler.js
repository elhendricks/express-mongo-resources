const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
// const Dragon = require('../models/dragon');

module.exports = {
    getAll(req, res, next, Model) {
        const query = {};
            
        for (var key in req.query) {
            query[key] = req.query[key];
        }

        Model.find(query)
            .then(elements => res.send(elements))
            .catch(next);
    },

    getById(req, res, next, Model) {
        Model.findById(req.params.id)
        .then(ele => {
            res.send(ele);
        })
        .catch(next);
    },

    deleteById(req, res, next, Model) {
        Model.findByIdAndRemove(req.params.id)
        .then(deleted => {
            res.send(deleted);
        })
        .catch(next);
    },

    add(req, res, next, Model) {
        new Model(req.body).save()
        .then(saved => {
            res.send(saved);
        })
        .catch(next);
    },

    update(req, res, next, Model) {
        Model.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(saved => {
            res.send(saved);
        })
        .catch(next);
    }
};


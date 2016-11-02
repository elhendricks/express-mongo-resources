const express require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Dragon = require('../models/dragon');

router
    .get('/', (req, res, next) => {
        //{} gets all
        const query = {};

        if (req.query.[something]) query.[something] = req.query.[something];

        Dragon.find(query)
            .then(dragons => req.send(dragons))
            .catch(next);
    })

    .get('/:id', (req, res, next_ => {
        //find by id
        //send as response
        //catch next
    }))

    .delete()

    .post(
        //make new Dragon and do the other stuff
    ) 

    .put('/:id', bodyParser, (req, res, next) => {
        //find by id and update
        //send res
        //catch  next
    })

module.exports = router;
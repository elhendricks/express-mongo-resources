const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = newSchema(
    {
    //define shape of model 


    }, 
    {
//schema level options 

//e.g. timestamps
    }
);

module.exports = mongoose.model('Dragon', schema);
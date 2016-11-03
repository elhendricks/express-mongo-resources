const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        name: {type: String, 
            required: true
        },
        color: String,
        treasure: Array,
        fire: Boolean
    }, 
    {
//schema level options 

//e.g. timestamps
    }
);

module.exports = mongoose.model('Dragon', schema);
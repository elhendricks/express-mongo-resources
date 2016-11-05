const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        name: {type: String, 
            required: true
        },
        color: {type: String,
                default: 'red'},
        treasure: {type: Array},
        fire: Boolean
    }, 
    {
//schema level options 

//e.g. timestamps
    }
);

module.exports = mongoose.model('Dragon', schema);
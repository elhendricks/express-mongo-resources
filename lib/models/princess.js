const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        name: {type: String, 
            required: true
        },
        badass: {type: Boolean,
            default: true},
        skill: String
    }

);

module.exports = mongoose.model('Princess', schema);
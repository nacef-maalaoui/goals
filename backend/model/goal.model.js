const mongoose = require('mongoose');

const Goal = mongoose.model('Goal',{
    name : {
        type : String
    },
    goals : {
        type : Number
    },
    image : {
        type : String
    }
});

module.exports = Goal;
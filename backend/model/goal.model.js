const mongoose = require('mongoose');

const Goal = mongoose.model('Goal',{
    name : {
        type : String
    },
    goal: {
        type : Number
    },
    image : {
        type : String
    }
});

module.exports = Goal;
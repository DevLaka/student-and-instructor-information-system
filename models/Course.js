const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Instructor = require('./Instructor');

const Course = new Schema({
    course_id :{
        type : String
    },
    course_name :{
        type: String
    },
    course_credit :{
        type: Number
    },
    course_instructor : [{
        type : Schema.Types.String
    }],
    course_deleted :{
        type: Boolean
    }
});

module.exports  = mongoose.model('Course',Course);
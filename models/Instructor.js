const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Instructor = new Schema({
    instructor_email :{
        type : String
    },
    instructor_name :{
        type: String
    },
    instructor_faculty :{
        type: String
    },
    instructor_type :{
        type: String
    },    
    instructor_deleted :{
        type : Boolean
    }
});

module.exports  = mongoose.model('Instructor', Instructor);
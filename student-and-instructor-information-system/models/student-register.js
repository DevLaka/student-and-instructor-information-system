const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Student = new Schema({
    student_FName :{
        type : String
    },
    student_Email :{
        type: String
    },
    student_RegNo :{
        type: String
    },
    student_CYear :{
        type : String
    },
    student_CSem :{
        type : String
    },
    student_deleted :{
        type : Boolean
    }

});

module.exports  = mongoose.model('Student',Student);
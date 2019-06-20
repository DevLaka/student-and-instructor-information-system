const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Exam schema
const ExamSchema = new Schema({

    examName: {
        type : String
    },
    description : {
        type: String
    },
    submissionFrom : {
        type : Date
    },
    dueDate : {
        type : Date
    }
});

//creating model
const Exam = mongoose.model('exam', ExamSchema);

module.exports = Exam;
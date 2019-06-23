const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Assignment schema
const AssignmentSchema = new Schema({

    assignmentName: {
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
const Assignment = mongoose.model('assignment', AssignmentSchema);

module.exports = Assignment;


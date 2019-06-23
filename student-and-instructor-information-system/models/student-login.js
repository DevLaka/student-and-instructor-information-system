const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StudentLogin = new Schema({
    studentLogin_uname :{
        type : String
    },
    studentLogin_password :{
        type: String
    },
 
    studentLogin_deleted :{
        type : Boolean
    }

});

module.exports  = mongoose.model('StudentLogin',StudentLogin);
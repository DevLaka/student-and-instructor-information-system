const express = require('express');
const Assignment = require('../../models/Assignment');
const Exam = require('../../models/Exam');
const Admin = require('../../models/Admin');
const Course = require('../../models/Course');
const Instructor = require('../../models/Instructor');
const Student = require ('../../models/student-register');
const StudentLogin = require ('../../models/student-login');


const Router = express.Router();

Router.get('/', function (req, res) {
    res.json({message: 'Student and Instructor Information System'});
});

//get all assignments
Router.get('/instructor/assignments', function (req, res) {
    Assignment.find({}).then(function (assignment) {
        res.send(assignment);
    })
});

//get single assignment
Router.get('/instructor/assignment/:assignmentname', function (req, res) {
    Assignment.findOne( {assignmentName: req.params.assignmentname}).then(function (assignment){
        res.send(assignment);
    }).catch(function (error) {
        res.send(error);
    });
});

//create an assignment
Router.post('/instructor/assignment', function (req,res) {
    Assignment.create(req.body).then(function (assignment){
        res.send(assignment);
    }).catch(function (error) {
        console.log(error);
    });
});

//updating due date of assignment
Router.put('/instructor/assignment/:assignmentName', function(req, res){
    console.log(req.params.assignmentName);
    Assignment.update({assignmentName : req.params.assignmentName}, req.body).then(function(assignment){
        res.send(assignment);
    })
});

//get all exam
Router.get('/instructor/exams', function (req, res) {
    Exam.find({}).then(function (exam) {
        res.send(exam);
    })
});

//get single exam
Router.get('/instructor/exam/:examName', function (req, res) {
    Exam.findOne( {examName: req.params.examName}).then(function (exam){
        res.send(exam);
    }).catch(function (error) {
        res.send(error);
    });
});

//create an exam
Router.post('/instructor/exam', function (req,res) {
    Exam.create(req.body).then(function (exam){
        res.send(exam);
    }).catch(function (error) {
        console.log(error);
    });
});

//IT17069328----------------------------
//get all admins
Router.get('/admins',function(req,res){
	Admin.find({}).then(function(admin){
		res.send(admin);
	}).catch(function(error){
		console.log(error);
	});
});

//get single admin
Router.get('/admins/:id', function (req, res) {
	let id = req.params.id;
    Admin.findById(id).then(function (admin){
        res.send(admin);
    }).catch(function (error) {
        res.send(error);
    });
});

//create an admin
Router.post('/admins', function (req,res) {
    Admin.create(req.body).then(function (admin){
        res.send(admin);
    }).catch(function (error) {
        console.log(error);
    });
});


//update admin
Router.post('/admins/update/:id',function(req, res) {
    Admin.findById(req.params.id, function(err, admin) {
        if (!admin)
            res.status(404).send("data is not found");
        else
            admin.admin_email = req.body.admin_email;
            admin.admin_name = req.body.admin_name;
            admin.admin_position = req.body.admin_position;
            admin.admin_deleted = req.body.admin_deleted;
        
            admin.save().then(admin => {
                res.json('Admin updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

//get all instructors
Router.get('/instructors',function(req,res){
	Instructor.find({}).then(function(instructor){
		res.send(instructor);
	}).catch(function(error){
		console.log(error);
	});
});

//get single instructor
Router.get('/instructors/:id', function (req, res) {
	let id = req.params.id;
    Instructor.findById(id).then(function (instructor){
        res.send(instructor);
    }).catch(function (error) {
        res.send(error);
    });
});

//create an instructor
Router.post('/instructors', function (req,res) {
    Instructor.create(req.body).then(function (instructor){
        res.send(instructor);
    }).catch(function (error) {
        console.log(error);
    });
});

//update instructor
Router.post('/instructors/update/:id',function(req, res) {
    Instructor.findById(req.params.id, function(err, instructor) {
        if (!instructor)
            res.status(404).send("data is not found");
        else
            instructor.instructor_email = req.body.instructor_email;
            instructor.instructor_name = req.body.instructor_name;
            instructor.instructor_faculty = req.body.instructor_faculty;
            instructor.instructor_type = req.body.instructor_type;
            instructor.instructor_deleted = req.body.instructor_deleted;            

            instructor.save().then(instructor => {
                res.json('Instructor updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

//get all courses
Router.get('/courses',function(req,res){
	Course.find({}).then(function(course){
		res.send(course);
	}).catch(function(error){
		console.log(error);
	});
});

//get a single course
Router.get('/courses/:id', function (req, res) {
	let id = req.params.id;
    Course.findById(id).then(function (course){
        res.send(course);
    }).catch(function (error) {
        res.send(error);
    });
});

//create a course
Router.post('/courses', function (req,res) {
    Course.create(req.body).then(function (course){
        res.send(course);
    }).catch(function (error) {
        console.log(error);
    });
});

//update course
Router.post('/courses/update/:id',function(req, res) {
    Course.findById(req.params.id, function(err, course) {
        if (!course)
            res.status(404).send("data is not found");
        else
            course.course_id = req.body.course_id;
            course.course_name = req.body.course_name;
            course.course_credit = req.body.course_credit;
            course.course_instructor = req.body.course_instructor;
            course.course_deleted = req.body.course_deleted;            

            course.save().then(instructor => {
                res.json('Course updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

//----IT17710534---

//------------Student Registration-----------------------
//get all studentProfiles


Router.get('/studentProfiles',function(req,res){
	Student.find({}).then(function(studentRegister){
		res.send(studentRegister);
	}).catch(function(error){
		console.log(error);
	});
});

//get single student
Router.get('/students/:id', function (req, res) {
	let id = req.params.id;
    Student.findById(id).then(function (student){
        res.send(student);
    }).catch(function (error) {
        res.send(error);
    });
});

//create a student

Router.post('/students', function (req,res) {
    Student.create(req.body).then(function (student){
        res.send(student);
    }).catch(function (error) {
        console.log(error);
    });
});

//update student
Router.post('/students/update/:id',function(req, res) {
    Student.findById(req.params.id, function(err, student) {
        if (!student)
            res.status(404).send("data is not found");
        else
            student.student_FName = req.body.student_FName;
            student.student_RegNo = req.body.student_RegNo;
            student.student_Email = req.body.student_Email;
            student.student_CYear = req.body.student_CYear;
            student.student_Sem = req.body.student_Csem;
            student.student_deleted = req.body.student_deleted;
        
            student.save().then( student=> {
                res.json('Student updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

// Student Login

//get all student Logins

Router.get('/studentLogins',function(req,res){
	StudentLogin.find({}).then(function(currentStudentLogin){
		res.send(currentStudentLogin);
	}).catch(function(error){
		console.log(error);
	});
});


// Student Login

//get all student Logins

Router.get('/studentLogins',function(req,res){
	StudentLogin.find({}).then(function(currentStudentLogin){
		res.send(currentStudentLogin);
	}).catch(function(error){
		console.log(error);
	});
});


//get single studentLogin
Router.get('/studentLogins/:id', function (req, res) {
	let id = req.params.id;
    StudentLogin.findById(id).then(function (currentStudentLogin){
        res.send(currentStudentLogin);
    }).catch(function (error) {
        res.send(error);
    });
});


//create a student Login

Router.post('/studentLogins', function (req,res) {
    StudentLogin.create(req.body).then(function (currentStudentLogin){
        res.send(currentStudentLogin);
    }).catch(function (error) {
        console.log(error);
    });
});

//update student Login
Router.post('/studentLogins/update/:id',function(req, res) {
    StudentLogin.findById(req.params.id, function(err, currentStudentLogin) {
        if (!currentStudentLogin)
            res.status(404).send("data is not found");
        else
            studentLogin.student_uname = req.body.studentL_uname;
            studentLogin.student_password = req.body.student_password;
           
            studentLogin.student_deleted = req.body.student_deleted;
        
            student.save().then( currentStudentLogin=> {
                res.json('Student updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

//---------------Student Profile--------------------------------

//get all students

Router.get('/studentProfiles',function(req,res){
	StudentProfile.find({}).then(function(currentStudentProfile){
		res.send(currentStudentProfile);
	}).catch(function(error){
		console.log(error);
	});
});

//get single studentProfile
Router.get('/studentProfiles/:id', function (req, res) {
	let id = req.params.id;
    StudentProfile.findById(id).then(function (urrentStudentProfile){
        res.send(urrentStudentProfile);
    }).catch(function (error) {
        res.send(error);
    });
});

//create a studentProfile

Router.post('/studentProfiles', function (req,res) {
    StudentProfile.create(req.body).then(function (currentStudentProfile){
        res.send(currentStudentProfile);
    }).catch(function (error) {
        console.log(error);
    });
});

//update student Profiles
Router.post('/studentProfiles/update/:id',function(req, res) {
    StudentProfile.findById(req.params.id, function(err, currentStudentProfile) {
        if (!student)
            res.status(404).send("data is not found");
        else
            student.student_FName = req.body.student_FName;
            student.student_RegNo = req.body.student_RegNo;
            
            student.student_deleted = req.body.student_deleted;
        
            StudentProfile.save().then( currentStudentProfile=> {
                res.json('Student  Profile updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});
module.exports = Router;

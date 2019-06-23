const express = require('express');
const Assignment = require('../../models/Assignment');
const Exam = require('../../models/Exam');

const Router = express.Router();

//IT17250498---------
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

    let updateDate =  req.body.dueDate;

    console.log(req.params.assignmentName);
    console.log(req.body);
    console.log(updateDate);

    Assignment.update({assignmentName : req.params.assignmentName}, req.body).then(function(assignment){
            res.send(assignment);
    }).catch(function (error) {
        console.log(error);
    });

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



module.exports = Router;

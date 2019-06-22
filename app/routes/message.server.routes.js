const express = require('express');
const Assignment = require('../../models/Assignment');
const Exam = require('../../models/Exam');

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

module.exports = Router;

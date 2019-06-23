import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Course = props => (
    <tr>
        <td style={props.course.course_deleted ? { textDecorationLine: 'line-through' } : { textDecorationLine: ' ' }}>{props.course.course_id}</td>
        <td style={props.course.course_deleted ? { textDecorationLine: 'line-through' } : { textDecorationLine: ' ' }}>{props.course.course_name}</td>
        <td style={props.course.course_deleted ? { textDecorationLine: 'line-through' } : { textDecorationLine: ' ' }}>{props.course.course_credit}</td>
        <td style={props.course.course_deleted ? { textDecorationLine: 'line-through' } : { textDecorationLine: ' ' }}>{props.course.course_instructor}</td>
        <td>
            <Link to={"/update/" + props.course._id}>Update</Link>
        </td>
    </tr>
)

export default class CourseList extends Component {

    constructor(props) {
        super(props);
        this.state = {courses: []};
    }

    componentDidMount() {
        axios.get('http://localhost:7000/api/messages/courses/')
            .then(response => {
                this.setState({ courses : response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:7000/api/messages/courses/')
            .then(response => {
                if(this.unmounted) 
                    return;

                this.setState({ courses : response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }


    componentWillUnmount() {
        this.unmounted = true;
      }


    courseList() {
        return this.state.courses.map(function(currentCourses, i){
            return <Course course = {currentCourses} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Courses List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Credit</th>
                            <th>Instructor</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.courseList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
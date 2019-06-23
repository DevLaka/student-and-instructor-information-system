import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Instructor = props => (
    <tr>
        <td style={props.instructor.instructor_deleted ? { textDecorationLine: 'line-through' } : { textDecorationLine: ' ' }}>{props.instructor.instructor_name}</td>
        <td style={props.instructor.instructor_deleted ? { textDecorationLine: 'line-through' } : { textDecorationLine: ' ' }}>{props.instructor.instructor_email}</td>
        <td style={props.instructor.instructor_deleted ? { textDecorationLine: 'line-through' } : { textDecorationLine: ' ' }}>{props.instructor.instructor_faculty}</td>
        <td style={props.instructor.instructor_deleted ? { textDecorationLine: 'line-through' } : { textDecorationLine: ' ' }}>{props.instructor.instructor_type}</td>
        <td>
            <Link to={"/update/" + props.instructor._id}>Update</Link>
        </td>
    </tr>
)

export default class InstructorList extends Component {

    constructor(props) {
        super(props);
        this.state = {instructors: []};
    }

    componentDidMount() {
        axios.get('http://localhost:7000/api/messages/instructors/')
            .then(response => {
                this.setState({ instructors : response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:7000/api/messages/instructors/')
            .then(response => {
                if(this.unmounted) 
                    return;

                this.setState({ instructors : response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }


    componentWillUnmount() {
        this.unmounted = true;
      }


    instructorList() {
        return this.state.instructors.map(function(currentInstructor, i){
            return <Instructor instructor = {currentInstructor} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Instructor List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Faculty</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.instructorList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
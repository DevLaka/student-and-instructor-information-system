import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Student = props => (
    <tr>
        <td className={props.student.student_deleted ? 'completed' : ''}>{props.student.student_FName}</td>
        <td className={props.student.student_deleted ? 'completed' : ''}>{props.student.student_Email}</td>
        <td className={props.student.student_deleted ? 'completed' : ''}>{props.student.student_RegNo}</td>
        <td className={props.student.student_deleted ? 'completed' : ''}>{props.student.student_CYear}</td>
        <td className={props.student.student_deleted ? 'completed' : ''}>{props.student.student_CSem}</td>
        <td>
            <Link to={"/update/" + props.student._id}>Update</Link>
        </td>
    </tr>
)

export default class StudentList extends Component {

    constructor(props) {
        super(props);
        this.state = {students: []};
    }

    componentDidMount() {
        axios.get('http://localhost:7000/api/messages/studentList/')
            .then(response => {
                 this.setState({ students : response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:7000/api/messages/studentList/')
            .then(response => {
                if(this.unmounted) 
                    return;

                this.setState({ students : response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }


    componentWillUnmount() {
        this.unmounted = true;
      }


    studentList() {
        return this.state.students.map(function(currentStudent, i){
            return <Student student = {currentStudent} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Student List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Full_Name</th>
                            <th>Email</th>
                            <th>Reg_No</th>
                            <th>Current Year</th>
                            <th>Current Semester</th>

                        </tr>
                    </thead>
                    <tbody>
                        { this.studentList() }
                    </tbody>
                </table>
            </div>
          )  
        }
}
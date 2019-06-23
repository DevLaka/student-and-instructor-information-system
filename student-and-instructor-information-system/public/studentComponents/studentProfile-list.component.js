import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const StudentProfile = props => (
    <tr>
        <td className={props.studentProfile.student_deleted ? 'completed' : ''}>{props.studentProfile.student_FName}</td>
        <td className={props.studentProfile.student_deleted ? 'completed' : ''}>{props.studentProfile.student_RegNo}</td>
        <td className={props.studentProfile.student_deleted ? 'completed' : ''}>{props.studentProfile.student_CYear}</td>
        <td className={props.studentProfile.student_deleted ? 'completed' : ''}>{props.studentProfile.student_CSem}</td>
        <td>
            <Link to={"/update/" + props.student._id}>Update</Link>
        </td>
    </tr>
)

export default class StudentProfileList extends Component {

    constructor(props) {
        super(props);
        this.state = {studentProfiles: []};
    }

    componentDidMount() {
        axios.get('http://localhost:7000/api/messages/studentProfiles/')
            .then(response => {
                this.setState({ studentProfiles : response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:7000/api/messages/studentProfiles/')
            .then(response => {
                if(this.unmounted) 
                    return;

                this.setState({ studentProfiles : response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }


    componentWillUnmount() {
        this.unmounted = true;
      }


      studentList() {
        return this.state.studentprofiles.map(function(currentStudentProfile, i){
            return <StudentProfile StudentProfile = {currentStudentProfile} key={i} />;
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
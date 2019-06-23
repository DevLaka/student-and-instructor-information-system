import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const StudentLogin = props => (
    <tr>
         <td className={props.studentLogin.student_deleted ? 'completed' : ''}>{props.studentLogin.student_uname}</td>
        <td className={props.studentLogin.student_deleted ? 'completed' : ''}>{props.studentLogin.student_password}</td>
        <td>
            <Link to={"/update/" + props.student._id}>Update</Link>
        </td>
    </tr>
)

export default class StudentLoginList extends Component {

    constructor(props) {
        super(props);
        this.state = {studentLogins: []};
    }

    componentDidMount() {
        axios.get('http://localhost:7000/api/messages/studentLogins/')
            .then(response => {
                this.setState({ studentLogins : response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:7000/api/messages/studentLogins/')
            .then(response => {
                if(this.unmounted) 
                    return;

                this.setState({ studentLogins : response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }


    componentWillUnmount() {
        this.unmounted = true;
      }


      studentList() {
        return this.state.studentLogins.map(function(currentStudentLogin, i){
            return <StudentLogin StudentLogin = {currentStudentLogin} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Student Login</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Password</th>
                           
                            

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
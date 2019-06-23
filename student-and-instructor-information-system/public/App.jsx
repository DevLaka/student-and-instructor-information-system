import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

import Header from './instructorComponents/Header';
import MainContent from './instructorComponents/MainContent';
import Footer from './instructorComponents/Footer';

import CreateStudent from './studentComponents/create-student.component';
import UpdateStudent from './studentComponents/update-student.component';
import StudentList from './studentComponents/student-list.component';

import CreateStudentLogin from './studentComponents/create-studentLogin';
import UpdateStudentLogin from './studentComponents/update-studentLogin.component';
import StudentLoginList from './studentComponents/studentLogin-list.component';

import CreateStudentProfile from './studentComponents/create-studentProfile.component';
import UpdateStudentProfile from './studentComponents/update-studentProfile.component';
import StudentProfielList from './studentComponents/studentProfile-list.component';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    componentDidMount() {
        fetch('/api/messages', {method: 'GET'})
            .then(res => res.json())
            .then(jsonRes => {
                this.setState({message: jsonRes.message});
            })
            .catch(err => {
                this.setState({message: 'An error occurred'});
            });
    }
    

    render() {
        return (
          <Router>
          <div className = "container">
            <nav className = "navbar navbar-expand-lg navbar-light bg-light">
              <a className = "navbar-brand" href = "https://codingthesmartway.com" rel="noopener noreferrer" target = "_blank" >
          
              </a>
              <Link to = "/" className = "navbar-brand">SIIS Student</Link>
              <div className = "collapse navbar-collapse" >
                <ul className = "navbar-nav mr-auto">
                  <li className = "navbar-item">
                    <Link to = "/studentList" className = "nav-link">Student</Link>
                  </li>
                 
                  <li className = "navbar-item">
                    <Link to = "/createStudent" className = "nav-link">Register Student</Link>
                  </li>
                 
                  <li className = "navbar-item">
                    <Link to = "/createLogin" className = "nav-link">Student Login</Link>
                  </li>

                  <li className = "navbar-item">
                    <Link to = "/studentProfiles" className = "nav-link">Student Profile</Link>
                  </li>
                  <li className = "navbar-item">
                    <Link to = "/studentLogins" className = "nav-link">Student Login List</Link>
                  </li>


                </ul>
              </div>
            </nav>


            <Route path = "/createStudent" exact component = {CreateStudent} />
            <Route path = "/" exact component = {StudentList} />
            <Route path = "/update/:id" component = {UpdateStudent} />

            <Route path = "/createLogin" exact component = {CreateStudentLogin} />
            <Route path = "/" exact component = {StudentLoginList} />
            <Route path = "/update/:id" component = {UpdateStudentLogin} />

            <Route path = "/studentProfiles" exact component = {CreateStudentProfile} />
            <Route path = "/" exact component = {StudentProfielList} />
            <Route path = "/update/:id" component = {UpdateStudentProfile} />

            
            
          </div>
        </Router>

            );
    }
}

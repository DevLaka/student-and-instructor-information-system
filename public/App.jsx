import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

import CreateAdmin from './adminComponents/create-admin.component';
import UpdateAdmin from './adminComponents/update-admin.component';
import AdminList from './adminComponents/admin-list.component'

import CreateInstructor from './adminComponents/create-instructor.component';
import InstructorList from './adminComponents/instructor-list.component';
import UpdateInstructor from './adminComponents/update-instructor.component'

import CreateCourse from './adminComponents/create-course.component';
import CourseList from './adminComponents/course-list.component';


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
              <Link to = "/" className = "navbar-brand">SIIS Administrator</Link>
              <div className = "collapse navbar-collapse" >
                <ul className = "navbar-nav mr-auto">
                  <li className = "navbar-item">
                    <Link to = "/" className = "nav-link">Admin</Link>
                  </li>
                  <li className = "navbar-item">
                    <Link to = "/createadmin" className = "nav-link">Create Admin</Link>
                  </li>
                  <li className = "navbar-item">
                    <Link to = "/instructor" className = "nav-link">Instructor</Link>
                  </li>
                  <li className = "navbar-item">
                    <Link to = "/createinstructor" className = "nav-link">Create Instructor</Link>
                  </li>
                  <li className = "navbar-item">
                    <Link to = "/course" className = "nav-link">Course</Link>
                  </li>
                  <li className = "navbar-item">
                    <Link to = "/createcourse" className = "nav-link">Create Course</Link>
                  </li>
                </ul>
              </div>
  
  
            </nav>

            <Route exact path = "/" exact component = {AdminList} />
            <Route exact path = "/update/:id" exact component = {UpdateAdmin} />
            <Route exact path = "/createadmin" exact component = {CreateAdmin} />
            <Route exact path = "/instructor" exact component = {InstructorList} />
            <Route exact path = "/createinstructor" exact component = {CreateInstructor} />
            <Route exact path = "/course" exact component = {CourseList} />
            <Route exact path = "/createcourse" exact component = {CreateCourse} />
          </div>
        </Router>

            );
    }
}

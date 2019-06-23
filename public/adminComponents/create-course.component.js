import React, {Component} from 'react';
import axios from 'axios';
export default class CreateCourse extends Component{

    constructor(props){
        super(props);

        this.onChangeCourseId = this.onChangeCourseId.bind(this);
        this.onChangeCourseName = this.onChangeCourseName.bind(this);
        this.onChangeCourseCredit = this.onChangeCourseCredit.bind(this);
        this.onChangeCourseInstructor = this.onChangeCourseInstructor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            course_id : '',
            course_name : '',
            course_credit : '',
            course_instructor : '',
            admin_deleted : false
        }
    }

    onChangeCourseId(e){
        this.setState({
            course_id : e.target.value
        });
    }

    onChangeCourseName(e){
        this.setState({
            course_name : e.target.value
        });
    }

    onChangeCourseCredit(e) {
        this.setState({
            course_credit : e.target.value
        });
    }

    onChangeCourseInstructor(e){
        this.setState({
            course_instructor : e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        console.log(`Form submitted`);
        console.log(`Course id: ${this.state.course_id}`);
        console.log(`Course Name: ${this.state.course_name}`);
        console.log(`Course Credit: ${this.state.course_credit}`);
        console.log(`Course Instructor: ${this.state.course_instructor}`);
        console.log(`####################################################`);

        const newCourse = {
            course_id : this.state.course_id,
            course_name : this.state.course_name,
            course_credit : this.state.course_credit,
            course_instructor : this.state.course_instructor,
            admin_deleted : this.state.admin_deleted
        }

        axios.post('http://localhost:7000/api/messages/courses', newCourse)
            .then(res => console.log(res.data));
            

        this.setState({
            course_id : '',
            course_name : '',
            course_credit : '',
            course_instructor : '',
            course_deleted : false
        })
    }


    render(){
        return(
            <div style = {{marginTop : 10}}>
                <h3>Create Course</h3>
                <form onSubmit = {this.onSubmit}>
                <div className="form-group"> 
                        <label>ID: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.course_id}
                                onChange={this.onChangeCourseId}
                                />
                    </div>
                    <div className="form-group">
                        <label>Course Name: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.course_name}
                                onChange={this.onChangeCourseName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Course Credit: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.course_credit}
                                onChange={this.onChangeCourseCredit}
                                />
                    </div>
                    <span>Instructors: </span><br/>
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="instructorCheckbox"
                                type="checkbox"
                                name="instructorCheckbox"
                                onChange={this.onChangeInstructorDeleted}
                                checked={this.state.instructor_deleted}
                                value={this.state.instructor_deleted}
                                />
                        <label className="form-check-label" htmlFor="instructorCheckbox">
                            James Watts
                        </label>                        
                    </div>
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="instructorCheckbox"
                                type="checkbox"
                                name="instructorCheckbox"
                                onChange={this.onChangeInstructorDeleted}
                                checked={this.state.instructor_deleted}
                                value={this.state.instructor_deleted}
                                />
                        <label className="form-check-label" htmlFor="instructorCheckbox">
                            Ahemed K Davis
                        </label>                        
                    </div>
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="instructorCheckbox"
                                type="checkbox"
                                name="instructorCheckbox"
                                onChange={this.onChangeInstructorDeleted}
                                checked={this.state.instructor_deleted}
                                value={this.state.instructor_deleted}
                                />
                        <label className="form-check-label" htmlFor="instructorCheckbox">
                            Julian Ivans
                        </label>                        
                    </div>
                   <br/>

                    <div className="form-group">
                        <input type="submit" value="Create Course" className="btn btn-primary" />
                    </div>
                </form>

            </div>
        );
    }
}

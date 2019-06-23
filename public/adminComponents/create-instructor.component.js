import React, {Component} from 'react';
import axios from 'axios';
export default class CreateInstructor extends Component{

    constructor(props){
        super(props);

        this.onChangeInstructorEmail = this.onChangeInstructorEmail.bind(this);
        this.onChangeInstructorName = this.onChangeInstructorName.bind(this);
        this.onChangeInstructorFaculty = this.onChangeInstructorFaculty.bind(this);
        this.onChangeInstructorType = this.onChangeInstructorType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
           instructor_email : '',
           instructor_name : '',
           instructor_faculty : '',
           instructor_type : '',
           instructor_deleted : false
        }
    }

    onChangeInstructorEmail(e){
        this.setState({
            instructor_email : e.target.value
        });
    }

    onChangeInstructorName(e){
        this.setState({
            instructor_name : e.target.value
        });
    }

    onChangeInstructorFaculty(e) {
        this.setState({
            instructor_faculty : e.target.value
        });
    }

    onChangeInstructorType(e) {
        this.setState({
            instructor_type : e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        console.log(`Form submitted`);
        console.log(`Instructor Email: ${this.state.instructor_email}`);
        console.log(`Instructor Name: ${this.state.instructor_name}`);
        console.log(`Instructor Faculty: ${this.state.instructor_faculty}`);
        console.log(`Instructor Type: ${this.state.instructor_type}`);
        console.log(`####################################################`);

        const newInstructor = {
            instructor_email: this.state.instructor_email,
            instructor_name : this.state.instructor_name,
            instructor_faculty : this.state.instructor_faculty,
            instructor_type : this.state.instructor_type,
            instructor_deleted : this.state.instructor_deleted
        }

        axios.post('http://localhost:7000/api/messages/instructors', newInstructor)
            .then(res => console.log(res.data));
            

        this.setState({
            instructor_email : '',
            instructor_name : '',
            instructor_faculty : '',
            instructor_type : '',
            instructor_deleted : false
        })
    }


    render(){
        return(
            <div style = {{marginTop : 10}}>
                <h3>Create Instructor</h3>
                <form onSubmit = {this.onSubmit}>
                <div className="form-group"> 
                        <label>Email: </label>
                        <input  type="email"
                                className="form-control"
                                value={this.state.instructor_email}
                                onChange={this.onChangeInstructorEmail}
                                />
                </div>
                    <div className="form-group">
                        <label>Name: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.instructor_name}
                                onChange={this.onChangeInstructorName}
                                />
                    </div>
                    <div className="form-group"><span>Faculty : &nbsp; &nbsp; &nbsp; </span>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="facultyOptions" 
                                    id="FOE" 
                                    value="FOE"
                                    checked={this.state.instructor_faculty ==='FOE'} 
                                    onChange={this.onChangeInstructorFaculty}
                                    />
                            <label className="form-check-label">FOE</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="facultyOptions" 
                                    id="FOC" 
                                    value="FOC" 
                                    checked={this.state.instructor_faculty === 'FOC'} 
                                    onChange={this.onChangeInstructorFaculty}
                                    />
                            <label className="form-check-label">FOC</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="facultyOptions" 
                                    id="FOB" 
                                    value="FOB" 
                                    checked={this.state.instructor_faculty ==='FOB'} 
                                    onChange={this.onChangeInstructorFaculty}
                                    />
                            <label className="form-check-label">FOB</label>
                        </div>
                    </div>
                    <div className="form-group"><span>Type : &nbsp; &nbsp; &nbsp; </span>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="typeOptions" 
                                    id="Permanent" 
                                    value="Permanent"
                                    checked={this.state.instructor_type ==='Permanent'} 
                                    onChange={this.onChangeInstructorType}
                                    />
                            <label className="form-check-label">Permanent</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="typeOptions" 
                                    id="Visiting" 
                                    value="Visiting" 
                                    checked={this.state.instructor_type === 'Visiting'} 
                                    onChange={this.onChangeInstructorType}
                                    />
                            <label className="form-check-label">Visting</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Instructor" className="btn btn-primary" />
                    </div>
                    <div className ="alert alert-success" role="alert">
                        This is a success alert—check it out!
                    </div>

                </form>

            </div>
        );
    }
}

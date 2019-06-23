import React, { Component } from 'react';
import axios from 'axios';
export default class UpdateInstructor extends Component {

    constructor(props) {
        super(props);

        this.onChangeInstructorEmail = this.onChangeInstructorEmail.bind(this);
        this.onChangeInstructorName = this.onChangeInstructorName.bind(this);
        this.onChangeInstructorFaculty = this.onChangeInstructorFaculty.bind(this);
        this.onChangeInstructorType = this.onChangeInstructorType.bind(this);
        this.onChangeInstructorDeleted = this.onChangeInstructorDeleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            instructor_email : '',
            instructor_name : '',
            instructor_faculty : '',
            instructor_type :'',
            instructor_deleted : false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:7000/api/messages/update/'+ this.props.match.params.id)
            .then(response => {
                if(this.unmounted) 
                    return;

                this.setState({
                    instructor_email: response.data.instructor_email,
                    instructor_name: response.data.instructor_name,
                    instructor_faculty: response.data.instructor_faculty,
                    instructor_type: response.data.instructor_type,
                    instructor_deleted: response.data.instructor_deleted
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentWillUnmount() {
        this.unmounted = true;
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

    onChangeInstructorDeleted(e) {
        this.setState({
            instructor_deleted : !this.state.instructor_deleted
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            instructor_email: this.state.instructor_email,
            instructor_name: this.state.instructor_name,
            instructor_faculty: this.state.instructor_faculty,
            instructor_type: this.state.instructor_type,
            instructor_deleted: this.state.instructor_deleted
        };
        console.log(obj);

        axios.post('http://localhost:7000/api/messages/instructors/update/'+ this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Instructors</h3>
                <form onSubmit={this.onSubmit}>
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
                    <div className="form-group">
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
                                    checked={this.state.instructor_faculty==='FOB'} 
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
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="deletedCheckbox"
                                type="checkbox"
                                name="deletedCheckbox"
                                onChange={this.onChangeInstructorDeleted}
                                checked={this.state.instructor_deleted}
                                value={this.state.instructor_deleted}
                                />
                        <label className="form-check-label" htmlFor="deletedCheckbox">
                            Delete Instructor
                        </label>                        
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Instructor" className="btn btn-primary" />
                    </div>

                    <div className ="alert alert-success" role="alert">
                        This is a success alert—check it out!
                    </div>

                </form>
            </div>
        )
    }
}
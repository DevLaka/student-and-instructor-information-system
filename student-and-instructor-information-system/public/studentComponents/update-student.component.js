import React, { Component } from 'react';
import axios from 'axios';
export default class UpdateStudent extends Component {

    constructor(props) {
        super(props);

        this.onChangeStudentFName = this.onChangeStudentFName.bind(this);
        this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
        this.onChangeStudentRegNo = this.onChangeStudentRegNo.bind(this);
        this.onChangeStudentCYear = this.onChangeStudentCYear.bind(this);
        this.onChangeStudentCSem = this.onChangeStudentCSem.bind(this);
        this.onChangeStudentDeleted = this.onChangeStudentDeleted.bind(this);

        this.state = {
            student_FName : '',
            student_email: '',
            student_RegNo : '',
            student_CYear : '',
            student_CSem :'',
            student_deleted : false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:7000/api/messages/students/'+ this.props.match.params.id)
            .then(response => {
                if(this.unmounted) 
                    return;

                this.setState({
                    student_FName: response.data.student_FName,
                    student_email: response.data.student_email,
                    student_RegNo: response.data.student_RegNo,
                    student_CYear: response.data.student_CYear,
                    student_CSem: response.data.student_CSem,
                    student_deleted : response.data.student_deleted
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentWillUnmount() {
        this.unmounted = true;
      }


    
      onChangeStudentFName(e){
        this.setState({
            student_FName : e.target.value
        });
    }

    onChangeStudentEmail(e){
        this.setState({
            student_Email : e.target.value
        });
    }

    onChangeStudentRegNo(e) {
        this.setState({
            student_RegNo : e.target.value
        });
    }

    onChangeStudentCYear(e) {
        this.setState({
            student_CYear : e.target.value
        });
    }
    
    onChangeStudentCSem(e) {
        this.setState({
            student_CSem : e.target.value
        });
    }

    onChangeStudentDeleted(e) {
        this.setState({
            student_deleted : !this.state.student_deleted
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            student_FName: this.state.student_FName,
            student_email: this.state.student_email,
            student_RegNo: this.state.student_RegNo,
            student_CYear: this.state.student_CYear,
            student_CSem: this.state.student_CSem,
            student_deleted : this.state.student_deleted
        };
        console.log(obj);

        axios.post('http://localhost:7000/api/messages/students/update/'+ this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Students</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Full Name </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.student_FName}
                                onChange={this.onChangeStudentFName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.student_email}
                                onChange={this.onChangeStudentEmail}
                                />
                    </div>
                    <div className="form-group">
                        <label>Registration Number: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.student_RegNo}
                                onChange={this.onChangeStudentRegNo}
                                />
                    </div>
                    <div className="form-group">
                        <label>Current Year: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.student_CYear}
                                onChange={this.onChangeStudentCYear}
                                />
                    </div>
                    <div className="form-group">
                        <label>Current Semester: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.student_CSem}
                                onChange={this.onChangeStudentCSem}
                                />
                    </div>
                    
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="deletedCheckbox"
                                type="checkbox"
                                name="deletedCheckbox"
                                onChange={this.onChangeStudentDeleted}
                                checked={this.state.student_deleted}
                                value={this.state.student_deleted}
                                />
                        <label className="form-check-label" htmlFor="deletedCheckbox">
                            Delete Student
                        </label>                        
                    </div>
                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Admin" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
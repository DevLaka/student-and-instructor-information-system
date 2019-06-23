import React, {Component} from 'react';
import axios from 'axios';
export default class CreateStudentProfile extends Component{

    constructor(props){
        super(props);

        this.onChangeStudentFName = this.onChangeStudentFName.bind(this);
        this.onChangeStudentRegNo = this.onChangeStudentRegNo.bind(this);
        this.onChangeStudentCYear = this.onChangeStudentCYear.bind(this);
        this.onChangeStudentCSem = this.onChangeStudentCSem.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            student_FName : '',
            student_RegNo : '',
            student_CYear : '',
            student_CSem : '',
            student_deleted : false
        }
    }

    onChangeStudentFname(e){
        this.setState({
            student_Fname : e.target.value
        });
    }

    onChangeStudentRegNo(e){
        this.setState({
            student_RegNo : e.target.value
        });
    }

    onChangeStudentCYear(e) {
        this.setState({
            student_CYear : e.target.value
        });
    }
    onChangeStudentCsem(e) {
        this.setState({
            student_CSem : e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        console.log(`Form submitted`);
        console.log(`Student Full Name: ${this.state.student_Fname}`);
        console.log(`Student Registration Number: ${this.state.student_RegNo}`);
        console.log(`Student Current year: ${this.state.student_CYear}`);
        console.log(`Student Current Semester: ${this.state.student_CSem}`);

        console.log(`####################################################`);

        const newStudentProfile = {
            student_Fname: this.state.student_Fname,
            student_RegNo: this.state.student_RegNo,
            student_CYear: this.state.student_CYear,
            student_CSem: this.state.student_CSem,

            student_deleted : this.state.student_deleted
        }

        axios.post('http://localhost:7000/api/messages/studentProfiles', newStudentProfile)
            .then(res => console.log(res.data));
            

        this.setState({
            student_Fname : '',
            student_RegNo : '',
            student_CYear : '',
            student_CSem  : '',
            student_deleted : false
        })
    }


    render(){
        return(
            <div style = {{marginTop : 10}}>
                <h3>Student Registration </h3>
                <form onSubmit = {this.onSubmit}>
                <div className="form-group"> 
                        <label>Full Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.student_FName}
                                onChange={this.onChangeStudentFname}
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


                <div className="form-group">
                        <input type="submit" value="Upload Assignment" className="btn btn-primary" />
                    </div>
                    
                </form>

            </div>
        );
    }
}

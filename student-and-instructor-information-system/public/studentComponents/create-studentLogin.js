import React, {Component} from 'react';
import axios from 'axios';
export default class CreateStudentLogin extends Component{

    constructor(props){
        super(props);

        this.onChangeStudentUName = this.onChangeStudentUName.bind(this);
        this.onChangeStudentPassword = this.onChangeStudentPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            student_uname : '',
            student_password : '',
            student_deleted : false
        }
    }

    onChangeStudentUName(e){
        this.setState({
            student_uname : e.target.value
        });
    }

    onChangeStudentPassword(e){
        this.setState({
            student_password : e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        console.log(`Form submitted`);
        console.log(`Student UserName: ${this.state.student_uname}`);
        console.log(`Student Password: ${this.state.student_password}`);
        console.log(`####################################################`);

        const newStudentLogin = {
            student_uname: this.state.student_uname,
            student_password : this.state.student_password,
            student_deleted : this.state.student_deleted
           
        }

        axios.post('http://localhost:7000/api/messages/studentLogins', newStudentLogin)
            .then(res => console.log(res.data));
            

        this.setState({
            student_uname : '',
            student_password: '',
            student_deleted : false  
        })
    }


    render(){
        return(
            <div style = {{marginTop : 10}}>
                <h3>Student Login</h3>
                <form onSubmit = {this.onSubmit}>
                <div className="form-group"> 
                        <label>UserName: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.student_uname}
                                onChange={this.onChangeStudentUName}
                                />
                    </div>
                   
                    <div className="form-group">
                        <label>Password: </label>
                        <input 
                                type="password" 
                                className="form-control"
                                value={this.state.student_password}
                                onChange={this.onChangeStudentPassword}
                                />
                    </div>
                   
                    <div className="form-group">
                        <input type="submit" value="Login" className="btn btn-primary" />
                    </div>

                </form>

            </div>
        );
    }
}

import React, { Component } from 'react';
import axios from 'axios';
export default class UpdateStudentLogin extends Component {

    constructor(props) {
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

    componentDidMount() {
        axios.get('http://localhost:7000/api/messages/studentLogins/'+ this.props.match.params.id)
            .then(response => {
                if(this.unmounted) 
                    return;

                this.setState({
                    student_uname: response.data.student_uname,
                    student_password: response.data.student_password,
                
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
    onChangeStudentDeleted(e) {
        this.setState({
            student_deleted : !this.state.student_deleted
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            student_uname: this.state.student_uname,
            student_password : this.state.student_password,
            student_deleted : this.state.student_deleted
        };
        console.log(obj);

        axios.post('http://localhost:7000/api/messages/studentLogins/update/'+ this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
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
                    <br />

                    <div className="form-group">
                        <input type="submit" value="Login" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
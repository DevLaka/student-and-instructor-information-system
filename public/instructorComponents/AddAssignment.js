import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

class AddAssignment extends Component{

    constructor(props){
        super(props);
        this.state = {

        };

        this.handleSubmitAddCourseForm = this.handleSubmitAddCourseForm.bind(this);
    }


    handleSubmitAddCourseForm(event){

        event.preventDefault();

        const assignmentName = this.refs.assname.value;
        const description = this.refs.desc.value;
        const startDate = this.refs.startdate.value;
        const endDate = this.refs.enddate.value;


        const data = {
            "assignmentName" : assignmentName,
            "description" : description,
            "submissionFrom" : startDate,
            "dueDate" : endDate
        };

        fetch('http://localhost:7000/api/messages/instructor/assignment', {
            method : 'POST',
            body : JSON.stringify(data),
            headers : {'Content-type' : 'application/json'}
        }).then(function (res) {
            return(res.json());
        }).then( json => {
            alert(json.assignmentName + ' is added to the db')
        })
    }


    // handleChangeAssignName(event){
    //     this.setState({
    //         assignmentName : event.target.value
    //     });
    // }


    render(){


        return(
            <div className="AddAssignmentContainer">

                <h3> Add a Assignment </h3>
                <form onSubmit={this.handleSubmitAddCourseForm}>
                    <div className="form-group">
                        <label htmlFor="assname"> Assignment name : </label>
                        <input type="text" ref="assname" className="form-control" id="assname" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="desc"> Description : </label>
                        <textarea rows="4" cols="50" ref="desc" className="form-control" id="desc"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="startdate"> Allow submission from : </label>
                        <input type="date" ref="startdate" className="form-control" id="startdate"/>
                    </div>


                    <div className="form-group">
                        <label htmlFor="startdate"> Due date : </label>
                        <input type="date" ref="enddate" className="form-control" id="startdate"/>
                    </div>

                    <button type="submit" className="btn btn-primary float-right"> Add a Assigment</button>

                </form>
            </div>
        )
    }



}

export default AddAssignment;
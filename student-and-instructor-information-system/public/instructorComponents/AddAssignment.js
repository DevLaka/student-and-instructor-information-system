import React, {Component} from 'react';

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

    render(){



        return(
            <div className="AddAssignmentContainer">
                <h3> Add a Assignment </h3>
                    <form onSubmit={this.handleSubmitAddCourseForm}>
                        <div className="form-group">
                                <label> Assignment name : </label>
                                <input type="text" ref="assname"/>
                        </div>

                        <div className="form-group">
                                    <label> Description : </label>
                                    <textarea rows="4" cols="50" ref="desc"/>
                        </div>

                        <div className="form-group">
                                <label> Allow submission from : </label>
                                <input type="date" ref="startdate"/>
                        </div>


                        <div className="form-group">
                            <label> Due date : </label>
                            <input type="date" ref="enddate"/>
                        </div>

                    <button type="submit" className="btn btn-primary"> Add a Assigment</button>

                    </form>
                </div>
        )
    }

}

export default AddAssignment;
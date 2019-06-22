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
                    <div className="row">
                        <div className="col-sm-6">
                            <label> Assignment name : </label>
                        </div>
                        <div className="col-sm-6">
                            <input type="text" ref="assname"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <label> Description : </label>
                        </div>
                        <div className="col-sm-6">
                            <textarea rows="4" cols="50" ref="desc"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <label> Allow submission from : </label>
                        </div>
                        <div className="col-sm-6">
                            <input type="date" ref="startdate"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <label> Due date : </label>
                        </div>
                        <div className="col-sm-6">
                            <input type="date" ref="enddate"/>
                        </div>
                    </div>

                    <button> Add a Assigment</button>
                </form>
            </div>
        )
    }

}

export default AddAssignment;
import React, {Component} from 'react';

class EditAssignmentDueDate extends Component {

    constructor(props){
        super(props);


        this.handleClickEditAssignmentDate = this.handleClickEditAssignmentDate.bind(this);
    }

    handleClickEditAssignmentDate(event){

        event.preventDefault();

        //getting the values from input fields of the form
        let assignmentname = this.refs.assname.value;
        let duedate = this.refs.duedate.value;

        //data to be send over the request body
        let data = {"assignmentname": assignmentname, "dueDate": duedate};

        fetch('http://localhost:7000/api/messages/instructor/assignment/' + assignmentname, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {'Content-type': 'application/json'}
        }).then(function (data){
            return data.json();
        }).then( function () {
            alert(" Due Date Modified")
        }).catch(function (error) {
            console.log(error);
        });

    }

    render() {

        return(

            <form onSubmit={this.handleClickEditAssignmentDate}>
                <label className="label">Enter the assigment Name :</label>
                <input type="text"
                       ref="assname"
                       placeholder="assignment Name"
                       className="inputBox"
                />

                <label className="label">Enter the new due date :</label>
                <input type="text"
                       ref="duedate"
                       placeholder="Due date"
                       className="inputBox"
                />

                <input type="submit"
                    value = "update due date"
                    className = "button"
                />

            </form>



        )

    }
}

export default EditAssignmentDueDate;
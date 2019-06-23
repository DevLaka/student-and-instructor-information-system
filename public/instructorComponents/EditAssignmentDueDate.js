import React, {Component} from 'react';

class EditAssignmentDueDate extends Component {

    constructor(props){
        super(props);


        this.handleClickEditAssignmentDate = this.handleClickEditAssignmentDate.bind(this);
    }

    handleClickEditAssignmentDate(event){

        event.preventDefault();

        let prevDate = "";
        //getting the values from input fields of the form
        let assignmentname = this.refs.assname.value;
        let duedate = this.refs.duedate.value;

        fetch('http://localhost:7000/api/messages/instructor/assignment/' + assignmentname).then(function (data){
            return data.json();
        }).then(json => {
            prevDate = json.dueDate;
            console.log( "prevDate : " + prevDate);

            if(duedate > prevDate){

                //data to be send over the request body
                let data = {"assignmentname": assignmentname, "dueDate": duedate};

                fetch('http://localhost:7000/api/messages/instructor/assignment/' + assignmentname, {
                    method: "PUT",
                    body: JSON.stringify(data),
                    headers: {'Content-type': 'application/json'}
                }).then(function (data){
                    return data.json();
                }).then( function () {
                    alert("Due Date Modified")
                }).catch(function (error) {
                    console.log(error);
                });

            }else{
                alert("The due date cannot be pre poned");
            }
        });
    }

    render() {

        const style = {
            marginTop : "50px"
        };

        return(

            <div className="updateDueDateFormContainer" style={style}>
            <h3> Update Due Date of an Assignment </h3>
            <form onSubmit={this.handleClickEditAssignmentDate}>
                <div className="form-group">
                    <label className="form-check-label" htmlFor="assname">Enter the assigment Name :</label>
                    <input type="text"
                           ref="assname"
                           placeholder="assignment Name"
                           className="inputBox"
                           id="assname"
                           className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="form-check-label" htmlFor="duedate">Enter the new due date :</label>
                    <input type="date"
                           ref="duedate"
                           placeholder="Due date"
                           className="inputBox"
                           id="duedate"
                           className="form-control"
                    />
                </div>


                <button type="submit" className="btn btn-primary float-right"> Update due date </button>

            </form>

            </div>

        )

    }
}

export default EditAssignmentDueDate;
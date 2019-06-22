import React, {Component} from 'react';

class Assignment extends Component{

    constructor(props){
        super(props);
        this.state = {
            assignment : {}
        };

        this.handleClickEditDueDate = this.handleClickEditDueDate.bind(this);

    }

    handleClickEditDueDate(){

        // const assignmentname = this.props.assName;
        //
        // //getting the values from input fields of the form
        // let date = this.refs.name.date;
        //
        // //data to be send over the request body
        // let data = {"assignmentname": assignmentname, "dueDate": date};
        //
        // fetch('http://localhost:7000/api/messages/instructor/assignment/' + assignmentname, {
        //     method: "PUT",
        //     body: JSON.stringify(data),
        //     headers: {'Content-type': 'application/json'}
        // }).then(function (data){
        //     return data.json();
        // }).then(json => {
        //     this.setState({
        //         assignment : json
        //     });
        // }).catch(function (error) {
        //     console.log(error);
        // });
    };

    render(){

        return(
            <div>
                <div className="card-body AssignmentContainer">
                    <p> Assignment Name : {this.props.assName}</p>
                    <p> Description : {this.props.desc}</p>
                    <p> Submission From : {this.props.from}</p>
                    <p> Due date : {this.props.duedate}</p>
                </div>
            </div>
        )
    }

}

export default Assignment;
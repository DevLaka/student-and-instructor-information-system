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
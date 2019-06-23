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

        const style = {
            marginTop : "10px",
            marginBottom : "10px",
            backgroundColor : "#e3f2fd"
        };

        return(
            <div className="card" style={style}>
                <div className="card-body AssignmentContainer">
                    <p className="card-title"> Assignment Name : {this.props.assName}</p>
                    <p className="card-text"> Description : {this.props.desc}</p>
                    <p className="card-text"> Submission From : {this.props.from.replace('T', ' ').replace('Z', ' ')}</p>
                    <p className="card-text"> Due date : {this.props.duedate.replace('T', ' ').replace('Z', ' ')}</p>
                </div>
            </div>


        )
    }

}

export default Assignment;
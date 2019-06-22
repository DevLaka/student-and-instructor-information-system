import React, {Component} from 'react';
import Assignment from './Assignment'


class ViewAllAssignments extends Component{

    constructor(props){
        super(props);
        this.state = {
            assignments : []
        };

        this.handleClickViewAllCourses = this.handleClickViewAllCourses.bind(this);
    };

    handleClickViewAllCourses(){

        fetch('http://localhost:7000/api/messages/instructor/assignments').then(function (data){
            return data.json();
        }).then(json => {
            this.setState({
                assignments : json
            });
        }).catch(function (error) {
            console.log(error);
        });
    };


    render(){

        console.log("CourseListItems rendering");
        const assignments = this.state.assignments;
        const assignmentsList = assignments.map(function (data,  index) {
            return (
                <div key={index}>
                    <Assignment assName={data.assignmentName} desc={data.description} from={data.submissionFrom} duedate={data.dueDate}/>
                </div>
            )
        });

        return(
            <div className="CourseListItemsContainer">
                <button onClick={this.handleClickViewAllCourses}> View all assignments </button>
                {assignmentsList}
            </div>
        )

    }

}

export default ViewAllAssignments;
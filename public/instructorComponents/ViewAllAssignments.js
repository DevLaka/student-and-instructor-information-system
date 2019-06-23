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

    componentDidMount() {

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


        const assignments = this.state.assignments;
        const assignmentsList = assignments.map(function (data,  index) {
            return (
                <div key={index}>
                    <Assignment assName={data.assignmentName} desc={data.description} from={data.submissionFrom} duedate={data.dueDate}/>
                </div>
            )
        });

        const style = {
            paddingTop : "50px"
        };

        return(
            <div className="CourseListItemsContainer" style={style}>
                <h3> List of Assignments </h3>
                {assignmentsList}
                <button type="submit" className="btn btn-primary float-right" onClick={this.handleClickViewAllCourses}> Refresh Assignment List</button>
            </div>
        )

    }

}

export default ViewAllAssignments;
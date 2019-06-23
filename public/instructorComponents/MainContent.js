import React, {Component} from 'react';
import AddAssignment from './AddAssignment';
import AddExam from './AddExam'
import ViewAllAssignments from './ViewAllAssignments';
import ViewAllExam from './ViewAllExam'
import EditAssignmentDueDate from "./EditAssignmentDueDate";

class MainContent extends Component{

    render(){

        const style = {
            padding : "70px"
        };

        return(
            <div className="MainContainer" style={style}>
                <div className="row">
                    <div className="col-sm-1"/>
                    <div className="col-sm-10">
                        <AddAssignment />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-1"/>
                    <div className="col-sm-10">
                        <AddExam />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-1"/>
                    <div className="col-sm-10">
                        <ViewAllAssignments />
                    </div>
                    <div className="col-sm-1"/>
                </div>
                <div className="row">
                    <div className="col-sm-1"/>
                    <div className="col-sm-10">
                        <ViewAllExam />
                    </div>
                    <div className="col-sm-1"/>
                </div>
                <div className="row">
                    <div className="col-sm-1"/>
                    <div className="col-sm-10">
                        <EditAssignmentDueDate />
                    </div>
                    <div className="col-sm-1"/>
                </div>
            </div>
        )
    }

}

export default MainContent;
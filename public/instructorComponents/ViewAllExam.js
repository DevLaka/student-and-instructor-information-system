import React, {Component} from 'react';
import Exam from './Exam'

class ViewAllExam extends Component{

    constructor(props){
        super(props);
        this.state = {
            exams : []
        };

        this.handleClickViewAllCourses = this.handleClickViewAllCourses.bind(this);
    };

    handleClickViewAllCourses(){

        fetch('http://localhost:7000/api/messages/instructor/exams').then(function (data){
            return data.json();
        }).then(json => {
            this.setState({
                exams : json
            });
        }).catch(function (error) {
            console.log(error);
        });
    };


    render(){

        console.log("CourseListItems rendering");
        const exams = this.state.exams;
        const examList = exams.map(function (data, index) {
            return (
                <div key={index}>
                    <Exam exName={data.examName} desc={data.description} date={data.date}/>
                </div>
            )
        });

        return(
            <div className="ExamListItemsContainer">
                <button onClick={this.handleClickViewAllCourses}> View Exams </button>
                {examList}
            </div>
        )

    }

}

export default ViewAllExam;
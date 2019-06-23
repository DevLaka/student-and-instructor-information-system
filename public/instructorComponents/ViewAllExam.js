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

    componentDidMount() {

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


        const exams = this.state.exams;
        const examList = exams.map(function (data, index) {
            return (
                <div key={index}>
                    <Exam exName={data.examName} desc={data.description} date={data.date}/>
                </div>
            )
        });

        const style = {
            paddingTop : "50px"
        };

        return(
            <div className="ExamListItemsContainer" style={style}>
                <h3> List of Exams </h3>
                {examList}
                <button type="submit" className="btn btn-primary float-right" onClick={this.handleClickViewAllCourses}> Refresh all Exams </button>
            </div>
        )

    }

}

export default ViewAllExam;
import React, {Component} from 'react';

class Exam extends Component{

    constructor(props){
        super(props);

    }

    render(){

        return(
            <div className="ExamContainer">
                <p> Exam Name : {this.props.examName}</p>
                <p> Description : {this.props.desc}</p>
                <p> Date : {this.props.date}</p>
            </div>
        )
    }

}

export default Exam;
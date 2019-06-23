import React, {Component} from 'react';

class Exam extends Component{

    constructor(props){
        super(props);

    }

    render(){

        const style = {
            marginTop : "10px",
            marginBottom : "10px",
            backgroundColor : "#e8f5e9"
        };

        return(
            <div className="card" style={style}>
                <div className="ExamContainer card-body">
                    <p className="card-title"> Exam Name : {this.props.exName}</p>
                    <p className="text"> Description : {this.props.desc}</p>
                    <p className="card-text"> Date : {this.props.date.replace('Z', ' ').replace('T', ' ')}</p>
                </div>
            </div>
        )
    }

}

export default Exam;
import React, {Component} from 'react';

class AddExam extends Component{

    constructor(props){
        super(props);
        this.state = {

        };

        this.handleSubmitAddCourseForm = this.handleSubmitAddCourseForm.bind(this);
    }

    handleSubmitAddCourseForm(event){

        event.preventDefault();

        const name = this.refs.name.value;
        const code = this.refs.code.value;
        const passMark = this.refs.passMark.value;
        const lecturer = this.refs.lecturer.value;
        const subname = this.refs.subname.value;
        const subdescription = this.refs.subdescription.value;
        const subamount = this.refs.subamount.value;

        const data = {
            "name" : name,
            "code" : code,
            "passMark" : passMark,
            "lectureInCharge" : lecturer,
            "subjects" : [
                {
                    "name" : subname,
                    "description" : subdescription,
                    "amount" : subamount
                }
            ]
        };

        fetch('http://localhost:3000/api/messages/courses', {
            method : 'POST',
            body : JSON.stringify(data),
            headers : {'Content-type' : 'application/json'}
        }).then(function (res) {
            return(res.json());
        }).then( json => {
            alert(json.name + ' is added to the db')
        })
    }

    render(){



        return(
            <div className="AddExamContainer">
                <h3> Add a Exam </h3>
                <form onSubmit={this.handleSubmitAddCourseForm}>
                    <div className="row">
                        <div className="col-sm-6">
                            <label> Exam name : </label>
                        </div>
                        <div className="col-sm-6">
                            <input type="text" ref="name"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <label> Description : </label>
                        </div>
                        <div className="col-sm-6">
                            <textarea rows="4" cols="50" ref="code"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <label> Allow submission from : </label>
                        </div>
                        <div className="col-sm-6">
                            <input type="date" ref="passMark"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <label> Due date : </label>
                        </div>
                        <div className="col-sm-6">
                            <input type="date" ref="lecturer"/>
                        </div>
                    </div>

                    <button> Add a Exam</button>
                </form>
            </div>
        )
    }

}

export default AddExam;
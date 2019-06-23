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
        const description = this.refs.description.value;
        const startdate = this.refs.startdate.value;

        const data = {
            "examName" : name,
            "description" : description,
            "date" : startdate
        };

        fetch('http://localhost:7000/api/messages/instructor/exam', {
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

            const style = {
                paddingTop : "50px"
            };

        return(

            <div className="AddExamContainer" style={style}>
                <h3> Add a Exam </h3>
                <form onSubmit={this.handleSubmitAddCourseForm}>

                    <div className="form-group">
                        <label htmlFor="name"> Exam name : </label>
                        <input type="text" ref="name" id="name" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description"> Description : </label>
                        <textarea rows="4" cols="50" ref="description" id="description" className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="startdate"> Date : </label>
                        <input type="date" ref="startdate" id="startdate" className="form-control"/>
                    </div>

                    <button type="submit" className="btn btn-primary float-right"> Add a Exam</button>
                </form>
            </div>
        )
    }

}

export default AddExam;
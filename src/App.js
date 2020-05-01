import React, { Component } from 'react';
import CourseList from './Component/CourseList'
import CourseForm from './Component/CourseForm'
class App extends Component {
  state = {
    courses: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
    ],
    current: ''
  }
  //Update while writing in the input
  updateCourse = (e) => {

    this.setState({
      current: e.target.value
    })
  }
  //adding
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({ name: current })
    this.setState({
      courses: courses,
      current : ''
    }) 
  }

//Remove function that I want to pass it as props to the child component
deleteCourse = (index) =>{
 let courses = this.state.courses;
 courses.splice(index , 1);
 this.setState({
   courses 
 })
}


//edit button update
editCourse= (index,value) => {
  let courses = this.state.courses;
  let course = courses[index];
  course['name'] = value ;
  this.setState({
    courses
  })
}



  render() {
    const { courses } = this.state;
    const courseList = courses.map((course, index) => {
      return <CourseList details={course} key={index} index={index} update={this.handleChange} deleteCourse={this.deleteCourse} editCourse = {this.editCourse} />
    })
    return (
      <section className="App">
        <h2>Add courses</h2>
        <CourseForm updateCourse={this.updateCourse} addCourse={this.addCourse} currentvalue={this.state.current} />
        <ul>{courseList}</ul>
      </section>
    );
  }

}


export default App;

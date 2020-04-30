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
  render() {
    const { courses } = this.state;
    const courseList = courses.map((course, index) => {
      return <CourseList details={course} key={index} update={this.handleChange} />
    })
    return (
      <section className="App">
        <h2>Add courses</h2>
        <CourseForm updateCourse={this.updateCourse} addCourse={this.addCourse} currentvalue ={this.state.current} />
        <ul>{courseList}</ul>
      </section>
    );
  }

}


export default App;

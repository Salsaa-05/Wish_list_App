import React, { Component } from 'react';
import CourseList from './Component/CourseList'
import CourseForm from './Component/CourseForm'
import splended from './1774953.gif'

class App extends Component {
  state = {
    courses: [
      { name: "Mastering JavaScript Data Structures and Algorithms" },
      { name: "Having a Driver license" }
   
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
    if(e.target.name===current){
      return false
    }else{
       courses.push({ name: current })
    this.setState({
      courses: courses,
      current: ''
    })
    }
      
    
   
}
   
  

  //Remove function that I want to pass it as props to the child component
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses
    })
  }


  //edit button update
  editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses
    })
  }

// ;)
secretCheat =() => {
alert("Kindly regards for seeing this massage ,that's mean you are deevloper ;well basicly this was ment to be an courses addtion list but then I changed my mind to make it as you can see right now  CMQ nice to see this Salsaa-05 ;)")
}

  render() {
    const { courses } = this.state;
    let length = courses.length;

    const courseList = length ? courses.map((course, index) => {
      return <CourseList details={course} key={index} index={index} update={this.handleChange} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />
    }) : (<p onDoubleClick={()=> this.secretCheat()}>Add Something</p>)
    return (
      <section className="App">
        <h2>Wish list</h2>
        <CourseForm updateCourse={this.updateCourse} addCourse={this.addCourse} currentvalue={this.state.current} />
        <ul>{courseList}</ul>
  
        <img src = {splended} alt='stars'  className='img'/>
        <img src = {splended} alt='stars'  className='img'/>
        <img src = {splended} alt='stars'  className='img'/>
        <img src = {splended} alt='stars'  className='img'/>
        <img src = {splended} alt='stars'  className='img'/>
        
      </section>
    );
  }

}


export default App;

//Salsaa-05
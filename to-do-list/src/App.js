import React, { Component } from 'react';
import CourseForm from './Components/courseForm/courseForm.js';
import CourseList from './Components/courseList/courseList.js'
import './App.css';

class App extends Component {
  state = {
    courses: [{ name: "Person1" }, { name: "person2" }, { name: "person3" }],
    current: " "
  };
  // UpdateCourse
  UpdateCourse = e => {
    this.setState({
      current: e.target.value
    });
  };

  // AddCourse

  addCourse = e => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({ name: current });
    this.setState({
      courses,
      current: " "
    });
  };
  // deleteCourse

  deleteCourse = index => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses
    });
  };

  // editCourse

  editCourse = (index , value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course["name"] = value;
    this.setState({
      courses 
    })
  }

  render() {
    const { courses } = this.state;
    const courseList = courses.map((course, index) => {
      return (
        <CourseList
          details={course}
          key={index}
          index={index}
          deleteCourse={this.deleteCourse}
          editCourse={this.editCourse}
        />
      );
    });
    return (
      <section className="App">
        <h2>Add Courses</h2>
        <CourseForm
          current={this.state.current}
          UpdateCourse={this.UpdateCourse}
          addCourse={this.addCourse}
        />
        <ul>{courseList} </ul>
      </section>
    );
  }
}

export default App;

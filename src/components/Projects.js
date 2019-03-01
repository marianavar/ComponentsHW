import projects from '../data/projects.json';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Project from './Project';
import '../App.js';

class Projects extends Component{
    render(){
      return(
          <div>
        <h1>My Projects:</h1>
        <Project />
      </div>
    )
  }
}

export default Projects;

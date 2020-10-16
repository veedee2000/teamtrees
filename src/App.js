import React, { Component } from 'react';
import './App.css';
// import Sidebar from './components/sidebar'
import Header from './components/header'
import About from './components/about'
import Skills from './components/skills'
import Education from './components/education';
import Experience from './components/experience'
import Projects from './components/projects'
import Footer from './components/footer'

export default class App extends Component {

  render() {
    return (
      <div>
        <Header></Header>
        <About></About>
        <Skills></Skills>
        <Education></Education>
        <Experience></Experience>
        <Projects></Projects>
        <Footer></Footer>
      </div>
    );
  }
}
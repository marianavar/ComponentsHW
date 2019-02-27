import React, { Component } from 'react';
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Main from './components/Main'
import Footer from './components/Footer'
import Contact from './components/Contact'
import SocialLinks from './components/SocialLinks'
import Resume from './components/Resume'
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Main />
        <Resume />
        <Projects />
        <Contact />
        <SocialLinks />
        <Footer />
      </div>
    );
  }
}

export default App;

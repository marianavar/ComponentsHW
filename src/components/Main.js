import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.js';
class Main extends Component {
    render () {
        return(
            <main id="about-me">
              <a href="#">
                <i class="far fa-arrow-alt-circle-up">

                </i>
              </a>
              <h1>About Me</h1>
              <picture>
                <img src="https://pbs.twimg.com/profile_images/739109952212467713/Vr_n84CJ.jpg" alt="my pictire' profile picture"/>
              </picture>
            </main>
        )
    }
}

export default Main

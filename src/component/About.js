import React from 'react';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';

function About(props) {
    return (
        <div>
            <h1>About Me</h1>
            <div>
                I enjoy web programming, computer games, science, all things in nature and cycling. 
                <br /><br />
            </div>
            <div>
                Colors generally used on this page I generated with Paletton.com, here is a link:<br />

                <a href="https://paletton.com/#uid=33L0X0kbi7d76jk7vczhz6vnd5d">Paletton.com</a> (external link)

            </div>
        </div>
    );
}

export default About;
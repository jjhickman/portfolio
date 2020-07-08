import React from 'react';
import Contact from '../Contact/Contact';

function Header(props) {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark navbar-fixed-top">
                <div className="navbar-brand hidden-lg-up mb-0 h1">
                <div className="navbar-nav" style={{display: "inline-block"}}>
                    <img src="/img/logo.svg" width="20%" height="20%" alt="" />
                    Josh Hickman
                    </div>
                    </div>   
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="#experience" className="nav-link">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a href="#portfolio" className="nav-link">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a href="#background" className="nav-link">Background</a>
                        </li>
                        <li className="nav-item ">
                            <a href="#exampleModalCenter" className="nav-link"  data-toggle="modal" data-target="#exampleModalCenter">Contact</a>
                            <Contact/>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    );
}


export default Header;

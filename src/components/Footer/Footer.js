import React from 'react';
import './Footer.css';

function Footer(props) {
    
    return (
            <nav id="footer" className="navbar navbar-expand-sm bg-dark navbar-dark navbar-fixed-top">
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto"  style={{display: "inline-block"}}>
                        <li className="nav-item">
                            <a href="#exampleModalCenter" className="nav-link"  data-toggle="modal" data-target="#exampleModalCenter"> &copy; {(new Date()).getFullYear()} Josh Hickman</a>
                        </li>
                    </ul>
                </div>
            </nav>
    );
}


export default Footer;

import React from 'react';
import './Background.css';

import config from '../../config.json';

function Background(props) {
    return (
<div id="background" className="background">
<div className="container py-5">

<div className="row text-center text-white">
    <div className="col-lg-8 mx-auto">
        <h1 className="display-4">Background</h1>
        </div>
    </div>
    <div className="pb-3 pt-2 border-bottom mb-5"/>
    <div className="row">
        <div className="col-lg-6 col-sm-6 mx-auto mycontent-left">
                {
                    config.certification && config.certification.map((certification, index) => {
                        return(
                            <div key={index} className="mb-5">
                                <h2 className="h4 mb-0 white-head">{certification.title}</h2>
                                <br/>
                                <a href={certification.verification}>
                                    <img src={certification.image}  width="20%" alt="..."/>
                                </a>
                                <br/>
                                <br/>
                                <span className="large text-white">{certification.authority} | {certification.duration}</span>
                                <br/>
                                <span className="large text-white">
                                    ID: {certification.id}
                                </span>
                            </div>
                        )
                    })
                }
                </div>
        <div className="col-lg-6 col-sm-6 mx-auto text-right">
                {
                    config.education && config.education.map((degree, index) => {
                        return(
                            <div key={index} >
                                <h2 className="h4 mb-0 white-head">{degree.title}</h2>
                                <br/>
                                <a href={degree.school}>
                                    <img src={degree.image}  width="40%" alt="..."/>
                                </a>
                                <br/>
                                <br/>
                        <span className="large text-white">{degree.duration} | GPA: {degree.gpa}</span>
                                <br/>
                                <br/>
                                <div >
                                {
                                    degree.courses && degree.courses.map((course, id) => {
                                        return (
                                            <span key={id} className="badge badge-light btn-space btn-large">{course}</span>
                                        )
                                    })
                                }</div>
                            </div>
                        )
                    })
                }
        </div>
    </div>
</div>
</div>
    );
}


export default Background;

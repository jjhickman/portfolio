import React from 'react';
import './Experience.css';

import config from '../../config.json';
function Experience(props) {
    return (
        <div id="experience" className="experience">
            <div className="container p-5">

                <div className="row text-center text-white">
                    <h1 className="display-4 mx-auto">Experience</h1>
                </div>
                <div className="pb-3 pt-2 border-bottom mb-5" />
                <div className="row">
                    <div className="container text-white">
                        <div className="row align-items-center how-it-works d-flex">
                            <div className="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">                               
                             <div className="testimonial-item">
                                    <img className="img-fluid rounded-circle" src={config.experience[0].image} alt="Sick" />
                                </div>
                            </div>
                            <div className="col-10">
                                <div className="row">
                                    <div className="col-7">
                                <h4>{config.experience[0].title}</h4>
                                </div>
                                    <div className="col">
    <strong>{config.experience[0].duration}</strong>
    </div>
                                </div>
                                <div className="row">
                                <ul>
                                    {
                                        config.experience[0].items && config.experience[0].items.map((item, index) => {
                                            return (
                                                <li key={index}>{item}</li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="row timeline">
                            <div className="col-2">
                                <div className="corner top-right"></div>
                            </div>
                            <div className="col-8">
                                <hr />
                            </div>
                            <div className="col-2">
                                <div className="corner left-bottom"></div>
                            </div>
                        </div>
                        <div className="row align-items-center justify-content-end how-it-works d-flex">
                            <div className="col-10">
                                <div className="row">
                                    <div className="col-7">
                                        <h4>{config.experience[1].title}</h4>
                                    </div>
                                    <div className="col">
                                        <strong>{config.experience[1].duration}</strong>
                                        </div>
                                </div>
                                <div className="row">
                                    <ul>
                                        {
                                            config.experience[1].items && config.experience[1].items.map((item, index) => {
                                                return (
                                                    <li key={index}>{item}</li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                                <div className="testimonial-item">
                                    <img className="img-fluid rounded-circle mb-3" src={config.experience[1].image} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="row timeline">
                            <div className="col-2">
                                <div className="corner right-bottom"></div>
                            </div>
                            <div className="col-8">
                                <hr />
                            </div>
                            <div className="col-2">
                                <div className="corner top-left"></div>
                            </div>
                        </div>
                        <div className="row align-items-center how-it-works d-flex">
                            <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                                <div className="circle-start" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Experience;

import React from 'react';
import './Portfolio.css';
import config from '../../config.json';

function Portfolio(props) {

  return (
      <section className="showcase">
          <div className="container-fluid pt-5">
          <h1 className="display-4 m-0 p-2 text-center bg-white text-dark">Portfolio</h1>
          {
            config.portfolio && config.portfolio.map((project, index) => {
              return (
                <div className="row" key={index}>
                  <div className={"col-lg-6 text-white showcase-img " + ((index % 2) === 0 ? "order-lg-2" : "")} style={{ backgroundImage: `url('${project.image}')` }}></div>
                  <div className={"col-lg-6 my-auto showcase-text " + ((index % 2) === 0 ? "order-lg-1" : "")}>
                    <div>
                    <h2>{project.name}</h2>
                    <p className="lead mb-0">{project.description}</p>
                    </div>
                    <br/>
                    <div>
                    <a className="btn btn-sm btn-space btn-outline-dark" href={project.demo}>Demo </a>
                    <a className="btn btn-sm btn-space btn-outline-dark " href={project.repo}> Repository</a>
                  </div>
                  <br/>
                  <div>
                      {
                        project.technologies && project.technologies.map((tech, id) => {
                          return (
                            <span key={id} className={"badge btn-space badge-dark"}>{tech}</span>
                          )
                        })
                      }
                      </div>
                  </div>
                </div>
          )
          })
        }
        </div>
      </section>
  );
}


export default Portfolio;

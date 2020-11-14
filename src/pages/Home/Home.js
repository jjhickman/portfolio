import React from 'react';
import './Home.css';
import config from '../../config.json';
//
function Home(props) {
  return (

    <div className="bg-dark">

      <header className="masthead text-white text-center">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 mx-auto">
              <h1 className="mb-5">Software Engineer | Solutions Architect</h1>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <form>
                <div className="form-row">
                  <div className="container">
                    <div className="row mt-5">
                      <div className="col-4">
                        <div className="features-icons-item mx-auto mb-lg-0 mb-lg-3">
                          <div className="features-icons-icon d-flex">
                            <a href="https://www.linkedin.com/in/joshjh" >
                            <i className="icon-screen-desktop m-auto iconify icon:fa:linkedin-square icon-inline:false text-white"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="features-icons-item mx-auto mb-lg-0 mb-lg-3">
                          <div className="features-icons-icon d-flex">
                            <a href="https://www.github.com/jjhickman">
                              <i className="icon-screen-desktop m-auto iconify icon:fa:github-square icon-inline:false icon-screen-desktop text-white"/>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="features-icons-item mx-auto mb-lg-0 mb-lg-3">
                          <div className="features-icons-icon d-flex">
                            <a href="https://www.twitter.com/kissmyasimov">
                              <i className="icon-screen-desktop m-auto iconify icon:fa-brands:twitter icon-inline:false text-white"/>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </header>
      <section className="features-icons bg-light text-center">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-4">
                <div className="features-icons-icon d-flex">
                  <i className="icon-screen-desktop m-auto iconify icon:subway:fot-screen icon-inline:false"></i>
                </div>
                <h3>Responsive</h3>
                <p className="lead mb-0">Works well and looks good in most environments!</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-4">
                <div className="features-icons-icon d-flex">
                  <i className="icon-layers m-auto iconify icon:ant-design:cloud-sync-outlined icon-inline:false"></i>
                </div>
                <h3>Cloud Native</h3>
                <p className="lead mb-0">Certified with experience in Amazon Web Services and Microsoft Azure</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-4">
                <div className="features-icons-icon d-flex">
                  <i className="icon-check m-auto iconify icon:ion:speedometer-outline icon-inline:false"></i>
                </div>
                <h3>Performant</h3>
                <p className="lead mb-0">Scaling systems from factory automation to the cloud!</p>
              </div>
            </div>
          </div>
        <hr className="gradient"/>
          <div className="row text-center text-dark mt-5">
            <div className="col">
                <div className="row m-5">
                  {
                    config.skills.languages && config.skills.languages.map((item, index) => {
                      return (

                        <div key={index} className="col">
                          <i className={item.image} />
                        </div>
                      );
                    })
                  }
                  </div>
                <div className="row m-5">
                  {
                    config.skills.frameworksLibraries && config.skills.frameworksLibraries.map((item, index) => {
                      return (
                        <div key={index} className="col">
                          <i className={item.image} />
                        </div>
                      );
                    })
                  }
              </div>
                <div className="row m-5">
                  {
                    config.skills.databases && config.skills.databases.map((item, index) => {
                      return (
                        <div key={index} className="col">
                          <i className={item.image} />
                        </div>
                      );
                    })
                  }
                </div>
                <div className="row m-5">
                {
                  config.skills.systems && config.skills.systems.map((item, index) => {
                    return (
                      <div key={index} className="col">
                      <i className={item.image} />
                      </div>
                    );
                  })
                }
              </div>
                <div className="row mb-5">
                {
                  config.skills.toolsServices && config.skills.toolsServices.map((item, index) => {
                    return (
                      <div key={index} className="col">
                      <i className={item.image} />
                      </div>
                    );
                  })
                }
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export default Home;

import React from 'react';

function NotFound(props) {
    return (
      <React.Fragment>
      <div class="container" height="100%">
        <br/>
        <div class="container">
          <div class="row text-center">
            <div class="col-md-12">
              <div class="error-template">
                <h1>404</h1>
                <br/>
                <h2>Not Found</h2>
                <br/>
                <div class="error-details">
                    Requested page does not exist!
                </div>
                <br/>
                <div class="error-actions">
                  <a href="/" class="btn btn-dark btn-lg">
                    <span class="glyphicon glyphicon-home"></span>
                    Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/>
        </div>
      </React.Fragment>
    );
}


export default NotFound;

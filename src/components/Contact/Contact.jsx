import React from 'react';

function Contact() {
    return(
        <div className="container">
        <div className="row">
          <div className="column-md-12">
            <div className="jumbotron">
              <div className="card" style="width: 18rem;">
                <div className="card-body">
                  <h5 className="card-title">Contact Information</h5>
                  <p className="card-text">Name: Parker Martin
                    <br />
                    <br />
                    Phone Number: (801)-651-0752
                    <br />
                    <br />
                    Email Address: parkerjmartin883@gmail.com
                  </p>
                  <p>
                  <a href="mailto:parkerjmartin883@gmail.com" className="card-link">Click Here</a> to send me an email!
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
    )

}

export default Contact;

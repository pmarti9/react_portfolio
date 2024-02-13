import React from 'react';
import "./Contact.css";


function Contact() {
    return(
        <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="jumbotron">
              {/* <div className="card" style={{width: "18rem"}}> */}
                <div className="card-body">
                  <h5 className="card-title">Contact Information</h5>
                  <p className="card-text">Name: Parker Martin
                    <br />
                    Phone Number: (801)-651-0752
                    <br />
                    Email Address: parkerjmartin883@gmail.com
                  </p>

                </div>
              {/* </div> */}
            </div>
          </div>
      </div>
      </div>
    )

}

export default Contact;

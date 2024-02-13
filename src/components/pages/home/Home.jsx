import React from "react";
import "./home.css"
import Parker from "../../../images/ParkerMartin.jpg";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="jumbotron">
            <h1 className="display2">About Me</h1>
            <hr className="my-2" />
            <img src={Parker} alt="Parker" />
            <div>
              <p className="intro">
                My name is Parker Martin. I live in Utah with my wife Lindsey
                and son Cooper. I've completed the Coding Bootcamp from the
                University of Utah and I specialize in backend development/engineering.
              </p>
              <p></p>
              <p>To View my portfolio, click on the portfolio link
                in the navigation. Feel free to follow me on GitHub, GitLab and LinkedIn by clicking on the icons at the bottom of the page.
              </p>
              <p>
                To contact me, click on the contact link in the navigation. You
                can also request me on LinkedIn or follow me on GitHub and GitLab by
                clicking on the icons at the bottom of the page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react"

function Portfolio(){
return(
  <div>
   <div className="container">
    <div className="row">
      <div className="col-xl-12">
        <div className="jumbotron">
          <hr />
          <h1>Portfolio</h1>
          <hr />
          <div className="card-group">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Github</h4>
                <p className="card-text">To check out my projects and repositories, <a
                    href="https://github.com/pmarti9">Click Here</a>.</p>

              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Resume</h4>
                <p className="card-text">To check out my qualifications and resume, <a href="ParkerResume.docx.pdf"
                    target="blank">Click Here</a> to view a PDF version</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">LinkedIn</h4>
                <p className="card-text">I am on LinkedIn! <a
                    href="https://www.linkedin.com/in/parker-martin-a5361147/">Here</a> is my profile! Check it out and
                  let me know what you think!</p>
              </div>
            </div>
          </div>
          <hr />
          <h3>Accomplishments</h3>
          <hr />
          <div className="card-group">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Project 1</h4>
                <p className="card-text" />
                <h6>Project Name: NBA STATS</h6>
                This is my first project. It was an NBA stats website. We used two different API's to call data. For the
                MVP, it pulls in team information and shows all time stats! Those all time stats are currently static
                and not being used by the API. To view the website, <a
                  href="https://swhorne.github.io/Project_G.O.A.T/">Click Here</a>.
                <br />
                <br />To view the repository, <a href="https://github.com/SWHorne/Project_G.O.A.T">Click Here</a>.
                <br /><br />
                Here is an image of the deployed application!
                <img className="proj1img" src="./Project1Screenshot.png" alt="Project1Screenshot" />
                {/* </p> */}

              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Password Generator</h4>
                <p className="card-text">This homework assignment was one of the first using Javascript. Upon clicking the
                  generate password button, it would give me a random passowrd of the length the user specified. This is
                  on my github profile and is the week 3 homework.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">First Portfolio Deploy</h4>
                <p className="card-text">This was the first deploy of the porftolio. I had used bootstrap and had a
                  different color scheme. This is the week 2 homework in my github profile.</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="card-group">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Project 2</h4>
                <p className="card-text">
                <h6>Project Name: QuranSale</h6>
                This is my second project. This QuaranSale webiste was to be used as a full stack application. Using the
                MVC methond and handlebars, we were able to implement the applicable routes to view the correct pages.
                We alos used bcrypt.js and had not previously covered it. To view the website, <a
                  href="https://parkersproject.herokuapp.com/  ">Click Here</a>.
                <br />
                <br />To view the repository, <a href="https://github.com/MartinMartinez83/Project2">Click Here</a>.
                <br /><br />
                Here is an image of the deployed application!
                <imgr className="proj2img" src="../../../public/images/Quaansale.png" alt="Project2Screenshot" />
                </p>

              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Note Taker</h4>
                <p className="card-text">This is a fully functioning Express App. To see the code in my github profile, and
                  it is the week 11 homework repository. To view the app, click <a
                    href="https://frozen-meadow-50876.herokuapp.com/">here</a>.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">BurgerLogger</h4>
                <p className="card-text">This homework assignment was the first express app that used JawsDB database with
                  heroku that had UI. It is the week 13 homework repo. The link to view it is <a
                    href="https://glacial-beyond-66562.herokuapp.com/">here</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
)
};

export default Portfolio;

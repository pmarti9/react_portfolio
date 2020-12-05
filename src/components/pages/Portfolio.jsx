import React from "react"
import proj1 from "./../../images/Project1Screenshot.png"
import proj2 from "./../../images/QuaranSale.png"
import resume from "./../../images/Parker Martin Resume_2020.pdf"
import proj3 from "./../../images/FeastFinder.png"

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
                <p className="card-text">To check out my qualifications and resume, <a href= {resume}
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
                <br />
                <h7>Technologies Used</h7>
                <p>
                 
                  <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Bootstrap</li>
                  <li>BallDontLie API</li>
                  <li>FontAwesome</li>
                  <li>Materialize</li>
                  <li>JQuery</li>
                  <li>Ajax</li>
                  </ul>
                  
                  </p>
                <br />To view the repository, <a href="https://github.com/SWHorne/Project_G.O.A.T">Click Here</a>.
                <br /><br />
                Here is an image of the deployed application!
                <img className="proj1img" src={proj1} alt="Project1Screenshot" />
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
                <br />
                <h7>Technologies Used</h7>
                <p>
                  <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MySQL</li>
                  <li>Sequelize</li>
                  <li>Heroku</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Handlebars</li>
                  <li>Bootstrap</li>
                  <li>bcrypt.js</li>
                  <li>passport.js</li>
                  <li>...and more</li>
                  </ul>
                  </p>
                <br />To view the repository, <a href="https://github.com/MartinMartinez83/Project2">Click Here</a>.
                <br /><br />
                Here is an image of the deployed application!
                <img className="proj2img" src={proj2} alt="QuaranSaleImage"/>
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
                    
                    
                    <br />
                    
                    <br />
              </div>
              
            </div>
          </div>   <hr />
          <div className="card-group">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Project 3</h4>
                <p className="card-text" />
                <h6>Project Name: Feast Finder</h6>
                This is my final project. A user can log in, search ingredients and post recipes to his account. To view the website, <a
                  href="https://feastfinder.herokuapp.com/">Click Here</a>.
                <br />
                <br />
                <h7>Technologies Used</h7>
                <p><ul>
                  <li>React.js</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>Tesseract.js</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>ReactBootstrap</li>
                  <li>Bootstrap</li>
                  <li>...and more</li>
                  </ul>
                  </p>
               To view the repository, <a href="https://github.com/pmarti9/feastfinder">Click Here</a>.
                <br /><br />
                Here is an image of the deployed application!
                <img className="proj1img" src={proj3} alt="FeastFinderScreenshot" />

              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Workout Tracker</h4>
                <p className="card-text">This app Is a full stack applcation for a workout tracker. To check out the Workout Tracker, click <a href="https://still-beach-28068.herokuapp.com/?id=5f20ca96ffa0700017169912">here</a>.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Budget Tracker</h4>
                <p className="card-text">The budget tracker app allowed a user to enter a transaction amount and number. Here is a link to the <a href="https://voyage-moliere-05252.herokuapp.com/">Budget Tracker</a></p>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </div>
  </div>
)
};

export default Portfolio;

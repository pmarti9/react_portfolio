import React from 'react'
import Parker from './../../images/ParkerMartin.jpg'


function Home() {
    return(
        <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="jumbotron">
              <h1 className="display 2">About Me</h1>
                <hr className="my-2" />
                <img src= {Parker} alt="Parker" />
                <div>
                  <p>My name is Parker Martin. I live in Utah with my wife Lindsey and son Cooper. I've completed the Coding Bootcamp from the University of Utah.</p>
                  <p>This is showcase of my skills. To View my portfolio and the projects I have completed/worked on, click on the portfolio link in the navigation. Feel free to follow me on GitHub and LinkedIn as well!</p>
                  <p>To contact me, click on the contact link in the navigation.</p>
                  </div>
                  {/* <hr />
                  <div>
                    <h1>Skills</h1>
                  </div> */}
            </div>

          </div>
        </div>


      </div>
        
 )
}

export default Home;
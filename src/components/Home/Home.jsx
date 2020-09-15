import React from 'react'
import Parker from './../../images/ParkerMartin.jpg'


function Home() {
    return(
        <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="jumbotron">
              <h1 className="display 2">About Me</h1>
                <hr className="my-2" />
                <img src= {Parker} alt="Parker" />
                  <p>My name is Parker Martin. I live in Saratoga Springs, Utah with my wife Lindsey and son Cooper. We love it here. I want to be a developer and am doing my best to adopt my skills necessary.</p>
                  <p>This is a showcase of where my skills can take me. Currently I have 2 project links and 4 homework assignments to showcase my abilities as a developer.
                  </p>
                  <p>To View my portfolio, click on the portfolio link in the navigation.</p>
                  <p>To contact me about my portfolio, click on the contact link in the navigation. My name and email addres is also located in the footer for all pages, and clicking on that will allow you to send me a message.</p>

            </div>

          </div>
        </div>


      </div>
        
 )
}

export default Home;
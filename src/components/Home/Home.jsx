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
                <div>
                  <p>My name is Parker Martin. I live in Saratoga Springs, Utah with my wife Lindsey and son Cooper. </p>
                  <p>This website is a showcase of my skills.</p>
                  <p>To View my portfolio, click on the portfolio link in the navigation.</p>
                  <p>To contact me about my portfolio, click on the contact link in the navigation. My name and email addres is also located in the footer for all pages, and clicking on that will allow you to send me a message.</p>
                  </div>

            </div>

          </div>
        </div>


      </div>
        
 )
}

export default Home;
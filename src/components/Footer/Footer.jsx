import React from 'react'
import "../Footer/Footer.css"
// import css from './../../../src/components/style.css'

function Footer() {
    return(
    <footer>
         <br />
         Parker Martin
         <br />
         <br />
         Click on my email address to send me an email! <a href="mailto:parkerjmartin883@gmail.com">parkerjmartin883@gmail.com</a>
         <br /><br />
        <div id="socialMedia">
         <a href="https://www.instagram.com/pmarti9"><i className="fab fa-instagram fa-md"></i></a>
         <a href="https://www.facebook.com/pmarti9"><i className="fab fa-facebook fa-md"></i></a>
         <a href="https://www.linkedin.com/in/parker-martin-a5361147/"><i className="fab fa-linkedin fa-md"></i></a>
         </div>
         <br />
      </footer>
    )

}

export default Footer;
import React from 'react'
import "../Footer/Footer.css"

function Footer() {

    function displayDate() {
        const date = new Date()
        const year = date.getFullYear()
        const day = date.getDate()
        const month = date.toLocaleString('default', { month: 'long' });
        return `${month} ${day}, ${year}`
    }
    return(
    <footer>
        <hr/>
        <span>{displayDate()}</span>
        <p>
         Send me an email: <a href="mailto:parkerjmartin883@gmail.com">parkerjmartin883@gmail.com</a>
        </p>
         <br /><br />
        <div id="socialMedia">
         <a href="https://www.github.com/pmarti9"><i className="fab fa-github fa-md"></i></a>
         <a href="https://www.gitlab.com/pmarti9"><i className="fab fa-gitlab fa-md"></i></a>
         <a href="https://www.linkedin.com/in/parker-martin-a5361147/"><i className="fab fa-linkedin fa-md"></i></a>
         </div>
         <br />
      </footer>
    )

}

export default Footer;
import React from 'react'
import "../Footer/Footer.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

function Footer() {


    const displayDate = () => {
        const date = new Date()
        const year = date.getFullYear()
        const day = date.getDate()
        const month = date.toLocaleString('default', { month: 'long' });
        return `${month} ${day}, ${year}`
    }
    return(
    <footer>

        <span>{displayDate()}</span>
        <p>
         Send me an email: <a href="mailto:parkerjmartin883@gmail.com">parkerjmartin883@gmail.com</a>
        </p>

        <div id="socialMedia">
         <a href="https://www.github.com/pmarti9"><FontAwesomeIcon icon={faGithub} /></a>&nbsp;&nbsp;|&nbsp;&nbsp;
         <a href="https://www.linkedin.com/in/parker-martin-a5361147/"><FontAwesomeIcon icon={faLinkedin }/></a>
         </div>

      </footer>
    )

}

export default Footer;
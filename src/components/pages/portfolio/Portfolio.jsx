import React from "react"
import resume from "../../../images/Parker Martin Resume 2023.pdf"
import "./portfolio.css"
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLaptopCode} from "@fortawesome/free-solid-svg-icons";


function Portfolio() {

    const portfolioContents = [
        {
            content: <a href="https://github.com/pmarti9\">Github <FontAwesomeIcon icon={faGithub}/> </a>,
        },
        {
            content: <a href="https://www.linkedin.com/in/parker-martin-a5361147/">LinkedIn <FontAwesomeIcon icon={faLinkedin }/></a>,
        },

        {
            content: <a href={resume}>Resume <FontAwesomeIcon icon={faLaptopCode} /></a>,
        }
    ];

    return (
        <div>

        {portfolioContents.map(function (data) {

                return (<>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="jumbotron">

                                        <div className="card-group">

                                            <div className="card">
                                                <div className="card-body">
                                                    <h4 className="card-title"> {data.content}
                                                    </h4>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </>
                )
            })}


        </div>
    )
}

export default Portfolio;

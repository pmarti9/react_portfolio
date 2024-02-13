import React from "react"
import resume from "../../../images/Parker Martin Resume_2020.pdf"

function Portfolio() {

    const workInfo = [
        {
            name: "GitHub",
            description: <a href="https://github.com/pmarti9\">Click here to visit my GitHub</a>
        },
        {
            name: "GitLab",
            description: <a href="https://gitlab.com/pmarti9">Click Here to visit my GitLab</a>
        },
        {
            name: "LinkedIn",
            description: <a href="https://www.linkedin.com/in/parker-martin-a5361147/">Click Here to go to my LinkedIn profile</a>
        },

        {
            name: "Resume",
            description: <a href={resume}> View my Resume</a>
        }
    ];

    return (
        <div>

            {workInfo.map(function (data) {

                return (<>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="jumbotron">

                                        <div className="card-group">

                                            <div className="card">
                                                <div className="card-body">
                                                    <h4 className="card-title"> {data.name}

                                                    </h4>
                                                    <p className="card-text">{data.description}.</p>

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
};

export default Portfolio;

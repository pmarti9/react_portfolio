import React from "react"
import resume from "../../../images/Parker Martin Resume_2020.pdf"

function Portfolio() {

    const workInfo = [
        {
            name: "GitHub",
            description: "This is my github profile"
        },
        {
            name: "GitLab",
            description: "This is my gitlab profile"
        },
        {
            name: "LinkedIn",
            description: "my linkedin profile"},
        {
            name: "Resume",
            description: "my resume"
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

                                        <hr/>
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

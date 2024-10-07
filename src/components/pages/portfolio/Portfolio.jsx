import React from "react"
import resume from "../../../images/Parker Martin Resume 2023.pdf"
import "./portfolio.css"


function Portfolio() {

    const workInfo = [
        {
            content: <a href="https://github.com/pmarti9\">GitHub<i className="fab fa-github fa-md"></i></a>,
        },
        {
            content: <a href="https://www.linkedin.com/in/parker-martin-a5361147/">LinkedIn<i className="fab fa-linkedin fa-md"></i></a>,
        },

        {
            content: <a href={resume}>Resume<i className="fas fa-laptop-code"></i></a>,
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
};

export default Portfolio;

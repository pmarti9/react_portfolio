import React from "react";
import resume from "../../../images/parker_martin_resume_current.pdf";
import altaStuccoScreenshot from "../../../images/alta-stucco.jpg";
import drift2sailScreenshot from "../../../images/drift2sail.jpg";
import "./portfolio.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function Portfolio() {
  const portfolioContents = [
    {
      id: "github",
      content: (
        <a href="https://github.com/pmarti9" target="_blank" rel="noopener noreferrer">
          GitHub <FontAwesomeIcon icon={faGithub} />{" "}
        </a>
      ),
    },
    {
      id: "linkedin",
      content: (
        <a href="https://www.linkedin.com/in/parker-martin-a5361147/" target="_blank" rel="noopener noreferrer">
          LinkedIn <FontAwesomeIcon icon={faLinkedin} />
        </a>
      ),
    },

    {
      id: "resume",
      content: (
        <a href={resume}>
          Resume <FontAwesomeIcon icon={faLaptopCode} />
        </a>
      ),
    },
  ];

  const clientProjects = [
    {
      id: "alta-stucco",
      title: "Alta Stucco",
      description:
        "React frontend built and deployed for Alta Stucco, a stucco and masonry contractor — live at altastucco.com.",
      liveUrl: "https://altastucco.com/",
      screenshot: altaStuccoScreenshot,
    },
    {
      id: "drift2sail",
      title: "Drift2Sail",
      description:
        "WordPress site configured and customized for Drift2Sail, a private and adaptive swim lesson business — live at drift2sail.com.",
      liveUrl: "https://drift2sail.com/",
      screenshot: drift2sailScreenshot,
    },
  ];

  return (
    <div>
      {portfolioContents.map(function (data) {
        return (
          <div className="container" key={data.id}>
            <div className="row">
              <div className="col-xl-12">
                <div className="jumbotron">
                  <div className="card-group">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title"> {data.content}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="jumbotron">
              <div className="row justify-content-center g-4">
                {clientProjects.map(function (project) {
                  return (
                    <div className="col-md-6" key={project.id}>
                      <div className="card project-card h-100">
                        <img
                          src={project.screenshot}
                          alt={`Screenshot of the ${project.title} website`}
                          className="project-card-img"
                        />
                        <div className="card-body">
                          <h4 className="card-title">{project.title}</h4>
                          <p className="card-text">{project.description}</p>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            Visit site <FontAwesomeIcon icon={faExternalLinkAlt} />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

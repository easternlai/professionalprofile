import React from "react";
import "./Skills.scss";

const Skills = () => {
  return (
    <section id="skills" className="bg-light">
      <div className="container text-center py-5">
        <h1 className="text-dark mb-3">
          <u>Skills</u>
          </h1>
          <div className="row text-dark">
              <div className="col-md-4 bulletin">
                  <ul>
                      <li>
                          System Administration
                      </li>
                  </ul>
              </div>
              <div className="col-md-4 bulletin">
                  <ul>
                      <li>
                          Networking
                      </li>
                  </ul>
              </div>
              <div className="col-md-4 bulletin">
                  <ul>
                      <li>
                          SAML
                      </li>
                  </ul>
              </div>
          </div>

      </div>
    </section>
  );
};
export default Skills;

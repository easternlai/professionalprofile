import React from "react";
import pic from "./pic.png";
import "./About.scss";

const About = () => {

return (
  <section id="about">
    <div class="container text-center py-5">
      <h1 className="text-dark mb-3">
        <u>About Me</u>
      </h1>
      <div className="row">
        <div className="col-md-4 text-dark">
          <img src={pic} className="profile-pic pr-5"/>
          
        </div>
        <div className="col-md-4 px-5">
          <p className="text-dark">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit,
          </p>
        </div>
        <div className="col-md-4 text-dark pl-5">
          <p>
            Hobbies Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit,
          </p>
        </div>
      </div>
    </div>
  </section>
)
};

export default About;

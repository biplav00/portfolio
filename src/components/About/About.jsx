import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section className="fullScreen about-container " id="about">
      <img src="/background-images/ttten.svg" alt="" />
      <div className="about-card">
        <h1>About Me</h1>
        <span className="about-me">
          Hello! <br />
          <br /> I am Biplav Subedi, and an enthusiastic software developer
          residing in Kathmandu. I enjoy developing and creating new things, and
          I am continuously pushing the limits of what is possible in the
          digital world. I'm committed to having a good effect via my work, with
          a focus on delivering new solutions. <br />
          <br /> Let's work together to bring your ideas to reality with
          cutting-edge technology!
        </span>
        <span className="my-photo">
          <img src="/background-images/prof.png" alt="" />
        </span>
      </div>
    </section>
  );
};

export default About;
{
  /*  */
}

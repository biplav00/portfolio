import React from "react";
import "./Home.scss";
import { Typewriter } from "react-simple-typewriter";
const Home = () => {
  return (
    <section className="home-container">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <div className="title"></div>
      <div className="text-container">
        <h1 className="animate__lightSpeedInLeft">Biplav Subedi</h1>
        <h3 className="animate__lightSpeedInLeft">
          <span>
            <Typewriter
              words={["Software Developer", "Web Designer", "PetrolHead"]}
              loop={20}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h3>
      </div>
    </section>
  );
};

export default Home;

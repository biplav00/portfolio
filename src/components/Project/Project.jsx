import React, { useState, useEffect, useRef } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import data from "../../components/utils/slider.json";
import "./Project.scss";

const Project = () => {
  const [current, setCurrent] = useState(0);
  const length = data.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }
  return (
    <section className=" project-container">
      <img src="/background-images/sk-2.png" alt="" className="b-img" />
      <h1>Projects</h1>
      <div className="project-slider">
        {data.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <>
                  <img src={slide.image} alt="travel image" className="image" />
                  <div className="card-text">
                    <h1>{slide.name}</h1>
                    <h3>{slide.detail}</h3>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
      <div className="project-controls">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      </div>
    </section>
  );
};

export default Project;

// {
//   data.map((card) => {
//     return (
//       <MyCard>
//         <img src={card.image} alt="" />
//         <h1>{card.name}</h1>
//         <h3>{card.detail}</h3>
//       </MyCard>
//     );
//   });
// }

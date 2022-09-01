import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    src:
    "https://cdn.pixabay.com/photo/2014/03/22/22/17/phone-292994_960_720.jpg",
    alt: "Project 1",
    desc: "Project 1",
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_960_720.jpg",
    alt: "Project 2",
    desc: "Project 2",
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2021/04/07/16/13/gaming-mouse-6159550_960_720.jpg",
      
    alt: "Project 3",
    desc: "Project 3",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;

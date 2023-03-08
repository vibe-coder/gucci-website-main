import "./about-styling/about-section-1.css"
import React from "react";
import AboutImage from "../model/pexels-pixabay-157675.jpg"

function AboutSection1() {
  return(
    <div className="about-section-1">
      <div className="black-backdrop">.</div>
      <h4 className="about-header">ABOUT GUCCI</h4>
      <div>
        <img className="about-image" src={AboutImage} alt ="About Img" />
      </div>
    </div>
  )
}


export default AboutSection1;
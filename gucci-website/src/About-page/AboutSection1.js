import "./about-styling/about-section-1.css"
import React from "react";
import AboutImage from "../model/pexels-pixabay-157675.jpg"

function AboutSection1() {
  return(
    <div className="about-section-1">
      <div className="black-backdrop">.</div>
      <h4 className="about-header">ABOUT GUCCI</h4>
      <div className="hero-wrapper">
        <img className="about-image" src={AboutImage} alt ="About Img" />
        
        <div className="right-column">
          <p className="about-text-1">
            INFLUENTIAL, INNOVATIVE <br/> AND PROGRESSIVE, GUCCI IS <br/> REINVENTING A WHOLLY <br/> MODERN APPROACH TO <br/> FASHION.
          </p>

          <p className="about-text-2">Under the new vision on creative director Alessandro 
            <br/>Michele, the House has redefined luxury for the 21st 
            <br/>century, further reinforcing its position as one of the
            <br/>world's most desirable fashion house. Eclectic, 
            <br/>contemporary, romantic -- Gucci products represent
            <br/>the pinaccle of Italian craftmanship and are 
            <br/>unsurpassed for their quality and attention to
            <br/>detail. Gucci is part of the Kering Group. A global
            <br/>Luxury group, Kering manages the development of a 
            <br/>series of renowned House in Fashion, Leather
            <br/>Goods, Jewellery and Watches.
             </p>
        </div>
      </div>
    </div>
  )
}


export default AboutSection1;
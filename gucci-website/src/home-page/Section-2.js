import React from "react";
import  "../styling/section-two.css"
import modelOne from "../model/oladimeji-odunsi-aU_eOcelLhQ-unsplash.jpg"
import modelTwo from "../model/alireza-dolati-OVS3rqXq9gg-unsplash.jpg"

function SectionTwo(){
  return(
    <div className="section-two">
      <div className="top-section">
        <h1>THE GUCCI GOOD <br/> GAME COLLECTION</h1>
      </div>

      <div className="middle-section"> 
        <div className="left">
          <p>Guccio Gucci's monogram has <br/> paid tribute to the brand's history<br/> since the 1960s</p>
        </div>

        <div className="center">
          <img src={modelOne}  alt="model one"/>
          <p>FOR WOMEN</p>
        </div>

        <div className="right">
        <img src={modelTwo}  alt="model one"/>
        </div>
      </div>

      <div className="middle-section"> 
      <div className="center">
          <img src={modelOne}  alt="model one"/>
          <p>FOR MEN</p>
        </div>

        <div className="right">
        <img src={modelTwo}  alt="model one"/>
        </div>
        
        
        <div className="right-2">
          <a href="www.gucci.com">VIEW COLLECTION</a>
        </div>
      </div>
    </div>
  )
}

export default SectionTwo;
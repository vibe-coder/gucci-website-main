import React  from "react"
import "./about-styling/about-section-3.css"
import GucciRetro1 from "../model/pexels-phuong-nguyen-13636217.jpg"
import GucciRetro2 from "../model/pexels-apollonia-14407016.jpg"
import GucciRetro3 from "../model/kitti-incedi-HajgFnKAioo-unsplash.jpg"
import GucciRetro4 from "../model/jingjie-wong-ZQWzhklAN48-unsplash.jpg"


export default function AboutSection3(){
  return (
    <div className="about-section-3">
      <div className="about-section-3-container">
        <img className="gucci-retro" src={GucciRetro1} alt="Gucci Retro" />
        <div className="gucci-address"><h3>@gucci.com</h3></div>
        <img className="gucci-retro" src={GucciRetro2} alt="Gucci Retro" />
        <img className="gucci-retro" src={GucciRetro3} alt="Gucci Retro" />
        <img className="gucci-retro" src={GucciRetro4} alt="Gucci Retro" />
      </div>
    </div>
  )
}


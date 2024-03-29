import React from "react";
import "../styling/section-four.css"
import gucciImage from "../model/oladimeji-odunsi-Wu3yqve2gnc-unsplash.jpg"
import gucciImage2 from "../model/calicadoo-ttdio_nOPjQ-unsplash.jpg"
import gucciImage3 from "../model/jingjie-wong-ZQWzhklAN48-unsplash.jpg"

function SectionFour(){
  return (
    <>
      <div className="section-four">
      <h4>WHAT'S NEW</h4>
      <div>
        <div className="column">
          <img className="column-image" src={gucciImage} alt="gucci img" />
          <p className="column-paragraph">GUCCI GOOD GAME COLLECTION</p>
        </div>
        <div className="column">
          <img className="column-image" src={gucciImage2} alt="gucci img" />
          <p className="column-paragraph">GUCCI HA HA HA</p>  
        </div>
        <div className="column">
          <img className="column-image" src={gucciImage3} alt="gucci img" />
          <p className="column-paragraph">THE GUCCI PET COLLECTION</p>  
        </div>
        
      </div>
      <a className="view-all-new" href="www.gucci.com">VIEW ALL</a>
      <p className="credit">Design by: Vladmir Paskov</p>
    </div>
    </>

  )
}

export default SectionFour;
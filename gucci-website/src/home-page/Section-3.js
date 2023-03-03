import React from "react";
import "../styling/section-three.css"
import bgImage from "../model/freestocks-_3Q3tsJ01nc-unsplash.jpg"

function SectionThree(){
  return(
    <div className="section-three">
      <img src={bgImage} className="bg-image-2" alt="background-img"/>

      <div className="category-wrapper">
        <h4 className="category-header">CATEGORY</h4>

        <div id="category" className="category">
          <a className="category-link" href="www.gucci.com"><span  className="category-number">01</span> GIFTS</a>
          <a className="category-link" href="www.gucci.com"><span  className="category-number">02</span> WHAT'S NEW</a>
          <a className="category-link" href="www.gucci.com"><span  className="category-number">03</span> HANDBAGS</a>
          <a className="category-link" href="www.gucci.com"><span  className="category-number">04</span> WOMEN</a>
          <a className="category-link" href="www.gucci.com"><span  className="category-number">05</span> MEN</a>
          <a className="category-link" href="www.gucci.com"><span  className="category-number">06</span> CHILDREN</a>
        </div>
      </div>
    </div>
  )
}

export default SectionThree;
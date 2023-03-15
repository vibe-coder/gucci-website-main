import "./men.css"
import React from "react"
import MenProduct from "./MenProduct"
import MenData from "./MenData"

export default function Men(){
  const productMap2 = MenData.map((MenData)=>{
    return (<MenProduct  
    image={MenData.image}
    name={MenData.name}
    price={MenData.price}
    />)
  })
  return(
    <>
      <div className="black-backdrop-2">.</div>
      <div className="men-page-wrapper">
        <div className="intro-wrapper-2">
          <p>Women<span className="grey-intro-2"> | Ready to Wear for Women</span></p>
        </div>
        
        <div className="header-wrapper-3">
          <h2>WOMEN'S READY-TO-WEAR</h2>
          <p>The women's ready-to-wear collection designed by Alessandro Michele mixes silk
            <br/>dresses, tweed ensembles and embelished looks.
          </p>
        </div>

        <div className="filter-button-wrapper-2">
          <div className="filter-wrapper-2">
            <div className="left-button-2">            
              <button className="button-2">Category <span className="arrow-2">›</span></button>
              <button className="button-2">Filter <span className="arrow-2">›</span></button>
            </div>
            
            <div className="right-button-2">
              <button className="sort-by-2">Sort by: <span className="newest-2">Newest ›</span></button>
            </div>
          </div>

          <div className="collection-wrapper-2">
            {productMap2}
          </div>

          <div className="load-more-wrapper-2">
            <a className="load-more-2" href="ww.gucci.com">LOAD MORE</a>
            <div className="more-pages-link-wrapper-2">
              <p>‹</p>
              <a href="ww.gucci.com">1</a>
              <a href="ww.gucci.com">2</a>
              <a href="ww.gucci.com">...</a>
              <a href="ww.gucci.com">8</a>
              <p>›</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
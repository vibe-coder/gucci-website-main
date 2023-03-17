import "./women.css"
import React from "react"
import WomenProduct from "./WomenProduct"
import WomenData from "./WomenData"

export default function Women(){
  const productMap = WomenData.map((WomenData)=>{
    return (<WomenProduct  
      // {...WomenData}
    image={WomenData.image}
    name={WomenData.name}
    price={WomenData.price}
    />)
  })
  return(
    <>
      <div className="black-backdrop-2">.</div>
      <div className="women-page-wrapper">
        <div className="intro-wrapper">
          <p>Women<span className="grey-intro"> | Ready to Wear for Women</span></p>
        </div>
        
        <div className="header-wrapper-2">
          <h2>WOMEN'S READY-TO-WEAR</h2>
          <p>The women's ready-to-wear collection designed by Alessandro Michele mixes silk
            <br/>dresses, tweed ensembles and embelished looks.
          </p>
        </div>

        <div className="filter-button-wrapper">
          <div className="filter-wrapper">
            <div className="left-button">            
              <button className="button">Category <span className="arrow">›</span></button>
              <button className="button">Filter <span className="arrow">›</span></button>
        </div>
            
            <div className="right-button">
              <button className="sort-by">Sort by: <span className="newest">Newest ›</span></button>
            </div>
          </div>

          <div className="collection-wrapper">
            {productMap}
          </div>

          <div className="load-more-wrapper">
            <a className="load-more" href="ww.gucci.com">LOAD MORE</a>
            <div className="more-pages-link-wrapper">
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
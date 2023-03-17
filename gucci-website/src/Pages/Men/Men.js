import React from "react";
import "./men.css"
import MennData from "./MenData"
import MenProduct from "./MenProduct";

export default function Men(){
  const productMap2 = MennData.map((MenData)=>{
    return (<MenProduct  
    image={MenData.image}
    name={MenData.name}
    price={MenData.price}
    />)
  })

  return (
    <>
      <div className="black-backdrop-3">.</div>
      <div className="men-page-wrapper">
        <div className="intro-wrapper-3">
        <p>Men<span className="grey-intro-3"> | Ready to Wear for Men</span></p>
      </div>

        <div className="header-wrapper-3">
          <h2>MEN'S READY-TO-WEAR</h2>
          <p>The men's ready-to-wear collection designed by Alessandro Michele mixes silk
            <br/>dresses, tweed ensembles and embelished looks.
          </p>
        </div>

        <div className="filter-button-wrapper-2">
          <div className="filter-wrapper-2">
            <div className="left-button-2">
              <button className="button">Category <span className="arrow">›</span></button>
              <button className="button">Filter <span className="arrow">›</span></button>
            </div>

            <div className="right-button-2">
              <button className="sort-by-2">Sort by: <span className="newest-2">Newest ›</span></button>
            </div>
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
    </>

  )
}
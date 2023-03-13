import "./women.css"
import React from "react"
import Image1 from "./Women-prodcut-Image/image-1.jpg"

export default function Women(props){
  return(
    <>
      <div className="black-backdrop-2">.</div>
      <div className="women-page-wrapper">
        <div className="intro-wrapper"><p>Women<span className="grey-intro"> | Ready to Wear for Women</span></p></div>
        
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
            <div className="product-div">
              <img className="women-product-image" src={`./Women-prodcut-Image/${props.image}`} alt="img one" />
              <h5 className="women-product-name">{props.name}</h5>
              <p className="women-product-price">{props.price}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
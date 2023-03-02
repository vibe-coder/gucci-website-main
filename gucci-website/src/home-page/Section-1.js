import React from "react"
import "../styling/section-one.css"
import bgImage from "../model/duane-mendes-k49kD3YXOsc-unsplash.jpg"
import gucciLogo from "../gucci-logo-1.svg"
import searchICon from "../icons8-search-50.png"
import walletIcon from "../icons8-wallet-50.png"

function SectionOne(){
  return(
    <div className="section-one">
      <img src={bgImage} className="bg-image" alt="background-img"/>
      <div className="header">
        <div className="link-wrapper">
          <a className="link" href="www.youtube.com">Men</a>
          <a className="link" href="www.youtube.com">Women</a>
          <a className="link"href="www.youtube.com">Kids</a>
        </div>
        <img className="gucci-logo" src={gucciLogo} alt='gucci logo' />

        <div className="icon-wrapper">
        <img className="icon" src={searchICon} alt='search icon' />
        <img className="icon" src={walletIcon} alt='search icon' />
        </div>
      </div>

      <div className="body">
        Body
      </div>
    </div>
  )
}

export default SectionOne;
import React from "react"
import "../styling/section-one.css"

function SectionOne(){
  return(
    <div className="section-one">
      <img src={require("../model/duane-mendes-k49kD3YXOsc-unsplash.jpg")} className="bg-image" alt="background-img"/>
      {/* <div className="header">
        <div className="link-wrapper">
          <a className="link" href="www.youtube.com">Men</a>
          <a className="link" href="www.youtube.com">Women</a>
          <a className="link"href="www.youtube.com">Kids</a>
          <a className="link"href="../About-page/about.js">About</a>
        </div>
        <img className="gucci-logo" src={gucciLogo} alt='gucci logo' />

        <div className="icon-wrapper">
        <img className="icon" src={searchICon} alt='search icon' />
        <img className="icon" src={walletIcon} alt='search icon' />
        </div>
      </div> */}

      <div className="body">
         <p className="intro-paragraph">A special collection available exclusively on Gucci.com <br/> combine two of the House's most distinctive design into<br/> an unexpected and contemporary fabric.</p>
         <a className="view-collection" href="www.gucci.com">VIEW COLLECTION</a>
      </div>

      <h1 className="supreme-flora"><span className="gg">GG</span> SUPREME FLORA</h1>
    </div>
  )
}

export default SectionOne;
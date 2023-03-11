import React from "react";
import "./about-styling/footer.css"
import GucciLogo from "../gucci-logo-1.svg"

export default function Footer(){
  return(
    <div className="footer">
      <div className="footer-line">.</div>
      <img className="gucci-logo-2" src={GucciLogo} alt="Gucci Logo" />
      <div className="footer-link-wrapper">
        <div className="catalogue-wrapper">
          <h4>Catalogue</h4>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Lookbooks</li>
          </ul>
        </div>
        <div className="legal-area-wrapper">1</div>
        <div className="socials-wrapper">1</div>
        <div className="info-wrapper">1</div>
        <div className="subscribe-wrapper">1</div>
      </div>
    </div>
  )
}
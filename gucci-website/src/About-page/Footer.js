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
          <ul>
          <h4>Catalogue</h4>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Lookbooks</li>
          </ul>
        </div>
        <div className="legal-area-wrapper">
        <ul>
          <h4>Legal area</h4>
            <li>Terms of sale</li>
            <li>Legal notice</li>
            <li>Cookies Settings</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="socials-wrapper">
        <ul>
          <h4>Socials</h4>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Pinterest</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className="info-wrapper">
        <ul>
          <h4>Info</h4>
            <li>About us</li>
            <li>Shopping</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="subscribe-wrapper">
          <h4>Submit to our newsletter</h4>
          <input className="mail-input" placeholder="Your e-mail address" type="email"/>
          <input className="check-input" placeholder="Your e-mail address" type="checkbox"/>
        </div>
      </div>
    </div>
  )
}
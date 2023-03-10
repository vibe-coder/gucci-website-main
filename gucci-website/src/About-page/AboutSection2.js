import "./about-styling/about-section-2.css"
import BagOne from "../model/wiser-by-the-mile-OFHkPCkhYEY-unsplash.jpg"
import GucciBamboo from "../model/gucii bamboo.jpg"
import BagTwo from "..//model/aromateec--q9tuxLn4hA-unsplash.jpg"

export default function AboutSection2(){
  return(
    <div className="about-section-2">
      <h4 className="bamboo-header">GUCCI BAMBOO 1947</h4>

      <div className="bamboo-collection-wrapper">
        <div className="left-column">

          <div className="bag-section">
            <div className="bag-1-wrapper">
              <img className="bag-1" src={BagOne} alt="Bag One" />
              <p>Bamboo large backpack</p>
            </div>

            <div className="bag-2-wrapper">
              <img className="bag-2" src={BagTwo} alt="Bag One" />
              <p>Bamboo mini handbag</p>
            </div>
          </div>


          <div className="text-section">
            <h3>Carry a Piece of History</h3>
            <p>In post-war 1947, when traditional materials were 
              <br/>difficult to find, Guccio Gucci and the House's
              <br/>Florentine artisans decided to use the lightweight,
              <br/>durable bamboo for the handle of a new bag, forging
              <br/>an instant emblem.
            </p>
            <a href="www.gucci.com">VIEW COLLECTION</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-column-2">
          <img className="gucci-bamboo" src={GucciBamboo} alt="gucci bamboo" />
        </div>
      </div>
    </div>
  )
}
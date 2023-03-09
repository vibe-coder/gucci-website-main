import './styling/App.css';
import {Link, Routes, Route} from "react-router-dom"
import Container from './Container';
import gucciLogo from "./gucci-logo-1.svg"
import searchICon from "./icons8-search-50.png"
import walletIcon from "./icons8-wallet-50.png"
import AboutContainer from './About-page/AboutContainer'; 


function App() {
  return (
    <>
      <nav className='header-wrapper'>
        <ul className='nav-link-wrapper'>
          <li><Link className='nav-link' to="/">Home</Link></li>
          <li><Link className='nav-link' to="/about">About</Link></li>
          <li><Link className='nav-link' to="/">Men</Link></li>
          <li><Link className='nav-link' to="/">Women</Link></li>
          <li><Link className='nav-link' to="/">Kids</Link></li>
        </ul>
        
        <img className="gucci-logo" src={gucciLogo} alt='gucci logo' />

        <div className="icon-wrapper">
          <img  className="icon" src={searchICon} alt='search icon' />
          <img className="icon" src={walletIcon} alt='search icon' />
        </div>
      </nav>

      
      <Routes>
        <Route path="/" element={<Container/>} /> 
        <Route path="about" element={<AboutContainer/>} /> 
      </Routes>
    </>

  );
}

export default App;

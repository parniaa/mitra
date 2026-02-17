import React from 'react';
import FallbackImage from './FallbackImage';


const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm" style={{maxHeight:75}}>
    <div className="container">
      <FallbackImage src="/mb.png" alt="Logo" style={{ width:75, margin: 18 }} />
      <a className="navbar-brand" href="#about">Mitra Behboudi</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navMenu">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          
          <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
          <li className="nav-item"><a className="nav-link" href="#issues">Issues</a></li>
          {/* <li className="nav-item"><a className="nav-link" href="#team">Team</a></li> */}
          <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a></li>
          <li className="nav-item"><a className="nav-link" href="#faq">FAQ</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;



import React from 'react';
import { useLocation } from 'react-router-dom';
import FallbackImage from './FallbackImage';


const Header = () => {
  const location = useLocation();
  const isFa = location.pathname.startsWith('/fa');

  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
    <div className="container">
      <FallbackImage src="/mb.png" alt="Logo" style={{ maxWidth: '75px', height: 'auto', margin: '0 18px', display: 'block' }} />
      <a className="navbar-brand" href="#about">Mitra Behboudi</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navMenu">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item ms-2">
            {isFa ? (
              <a className="nav-link" href="/">🇬🇧 English</a>
            ) : (
              <a className="nav-link" href="/fa">🇮🇷 فارسی</a>
            )}
          </li>
          
          <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#expertise">Expertise</a></li>
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
};

export default Header;



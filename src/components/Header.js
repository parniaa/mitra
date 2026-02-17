import React from 'react';
import FallbackImage from './FallbackImage';
import { CALENDLY_URL } from '../config';


const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
    <div className="container">
      <FallbackImage src="/mb.png" alt="Logo" style={{ maxWidth: '75px', height: 'auto', margin: '0 18px', display: 'block' }} />
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
          <li className="nav-item d-lg-none"><a href={CALENDLY_URL} target="_blank" rel="noreferrer" onClick={(e)=>{ if(window.Calendly){ e.preventDefault(); window.Calendly.initPopupWidget({url: CALENDLY_URL}); } }} className="nav-link btn btn-primary btn-sm" style={{marginTop: '0.5rem'}}>Book Consultation</a></li>
        </ul>
      </div>
      <a href={CALENDLY_URL} target="_blank" rel="noreferrer" onClick={(e)=>{ if(window.Calendly){ e.preventDefault(); window.Calendly.initPopupWidget({url: CALENDLY_URL}); } }} className="btn btn-primary btn-sm d-none d-lg-inline-block" style={{marginLeft: '1rem'}}>Book Consultation</a>
    </div>
  </nav>
);

export default Header;



import React from 'react';
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Branches</h3>
          <a href="#"> <FaMapMarkerAlt />Beside Main Road</a>
          <a href="#">Gokavaram</a>
          <a href="#">East Godavari Dist</a>
          <a href="#">Andhra Pradesh</a>
        </div>

        <div className="box">
          <h3>Contact info</h3>
          <a href="tel:+917799773538"> <FaPhone /> +91-9908452522 </a>
          <a href="tel:+919676336741"> <FaPhone /> +91-9121345262 </a>
          <a href="mailto:bujjimanapuram.com"> <FaEnvelope /> ramana.murthy.k567@gmail.com </a>
          <a href="mailto:bujjikirana@gmail.com"> <FaEnvelope /> bujjikirana@gmail.com </a>
          <a href="#"> <FaMapMarkerAlt /> Andhra Pradesh, Gokavaram, India - 533286</a>
        </div>

        <div className="box">
          <h3>Follow Us</h3>
          {/* Update href attributes to link to actual social media pages */}
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon"> 
            <FaFacebookF /> facebook 
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon"> 
            <FaTwitter /> twitter 
          </a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon"> 
            <FaInstagram /> instagram 
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon"> 
            <FaLinkedinIn /> linkedin 
          </a>
        </div>
      </div>

      <div className="credit">
        created by <span>Viswa</span> | © all rights reserved
      </div>
    </section>
  );
};

export default Footer;
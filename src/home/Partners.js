import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

// Import images
import googleLogo from '../assets/partners/logo_one.png';
import amazonLogo from '../assets/partners/logo_two.png';
import microsoftLogo from '../assets/partners/logo_one.png';
import appleLogo from '../assets/partners/logo_two.png';
import facebookLogo from '../assets/partners/logo_one.png';
import ibmLogo from '../assets/partners/logo_two.png';
import intelLogo from '../assets/partners/logo_one.png';
import oracleLogo from '../assets/partners/logo_two.png';
import salesforceLogo from '../assets/partners/logo_one.png';
import adobeLogo from '../assets/partners/logo_two.png';

const partners = [
  { id: 1, logo: googleLogo },
  { id: 2, logo: amazonLogo },
  { id: 3, logo: microsoftLogo },
  { id: 4, logo: appleLogo },
  { id: 5, logo: facebookLogo },
  { id: 6, logo: ibmLogo },
  { id: 7, logo: intelLogo },
  { id: 8, logo: oracleLogo },
  { id: 9, logo: salesforceLogo },
  { id: 10, logo: adobeLogo },
];

const PartnerSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === partners.length - 6 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? partners.length - 6 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === partners.length - 6 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='container'>
      <div className="partner-section">
        <button className="nav-button prev" onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <div className="partner-slider-container">
          <div 
            className="partner-slider"
            style={{ transform: `translateX(-${currentIndex * (100 / 6)}%)` }}
          >
            {partners.map((partner) => (
              <div key={partner.id} className="partner-slide">
                <img src={partner.logo} alt="Partner logo" />
              </div>
            ))}
          </div>
        </div>
        <button className="nav-button next" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default PartnerSection;
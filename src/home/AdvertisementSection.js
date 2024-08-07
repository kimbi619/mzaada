import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import images (replace with your actual images)
import adImage1 from '../assets/ads/ad1.png';
import adImage2 from '../assets/ads/ad2.png';
import adImage3 from '../assets/ads/ad3.png';

const advertisements = [
  {
    id: 1,
    image: adImage1,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 2,
    image: adImage2,
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 3,
    image: adImage3,
    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  }
];

const AdvertisementSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === advertisements.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? advertisements.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === advertisements.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container">
      <div className="advertisement-section">
        <button className="ad-nav-button prev" onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <div className="advertisement-slider-container">
          <div 
            className="advertisement-slider"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {advertisements.map((ad) => (
              <div key={ad.id} className="advertisement-slide">
                <div className="ad-image">
                  <img src={ad.image} alt="Advertisement" />
                </div>
                <div className="ad-content">
                  <p>{ad.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="ad-nav-button next" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default AdvertisementSection;
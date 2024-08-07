import React from 'react'
import './home.css'
import AboutUsSection from './AboutUsSection'
import HeroSection from './HeroSection'
import WhatWeDoSection from './WhatWeDoSection'
import LocationSection from './LocationSection'
import PartnerSection from './Partners'
import AdvertisementSection from './AdvertisementSection'
import BlogSection from './BlogSection'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WhatWeDoSection />
      <LocationSection />
      <BlogSection />
      <AdvertisementSection />
      <PartnerSection />
      <AboutUsSection />
    </div>
  )
}

export default Home
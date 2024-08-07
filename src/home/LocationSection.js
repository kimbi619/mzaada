import React from 'react'
import CustomMap from './Map'

const LocationSection = () => {
  return (
    <div className='landing_page_location_section'>
        <h2 className='section_title '>Localisation des interventions</h2>
        <div className='location_google_map'>
            <CustomMap />
        </div>
    </div>
  )
}

export default LocationSection
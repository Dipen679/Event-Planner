// imports
import React from 'react'

//Imported Images ====>
import outdoorLarge from '../assets/img/outdoor.jpeg'
import outdoorSmall from '../assets/img/outdoor.jpeg'

import palaceLarge from '../assets/img/deepika.jpeg'
import palaceSmall from '../assets/img/deepika.jpeg'

import caveLarge from '../assets/img/cave.jpeg'
import caveSmall from '../assets/img/cave.jpeg'

import clubLarge from '../assets/img/club.jpeg'
import clubSmall from '../assets/img/club.jpeg'
import NavBar from "../NavBar";



const Venue = () => {
  return (
	<>
    <section id="venue">
      <div className='alumni container section'>
        <div className="sectionContainer">
          <h2>
            Venues
          </h2> 
          {/* <p>Hello World</p> */}

          <div className="alumniContainer grid">
            {/* SIngle Alumni card*/}
            <div className="singleAlumni">

              <img src={outdoorLarge} className='destinationImage' />
              <div className="alumniDetails">
                <div className="alumniPicture">
                  <img src={outdoorSmall} className="alumniImage" />
                </div>
                <div className="alumniName">
                  <span>Singapore</span>
                  <p>Reception</p>
                  <p>Where Tradition Meets Tomorrow</p>
                </div>
              </div>

            </div>

            <div className="singleAlumni">
              <img src={palaceLarge} className='destinationImage' />
              <div className="alumniDetails">
                <div className="alumniPicture">
                  <img src={palaceSmall} className="alumniImage" />
                </div>
                <div className="alumniName">
                  <span>India</span>
                  <p>Engagement</p>
                  <p>Where vibrant cultures and timeless traditions converge in a tapestry of diversity</p>
                </div>
              </div>

            </div>

            <div className="singleAlumni">
              <img src={caveLarge} className='destinationImage' />
              <div className="alumniDetails">
                <div className="alumniPicture">
                  <img src={caveSmall} className="alumniImage" />
                </div>
                <div className="alumniName">
                  <span>Thailand</span>
                  <p>Official Dinner</p>
                  <p>Where ancient traditions meet vibrant modernity in a tropical paradise</p>
                </div>
              </div>

            </div>

            <div className="singleAlumni">
              <img src={clubLarge} className='destinationImage' />
              <div className="alumniDetails">
                <div className="alumniPicture">
                  <img src={clubSmall} className="alumniImage" />
                </div>
                <div className="alumniName">
                  <span>Las Vegas</span>
                  <p>Birthday Party</p>
                  <p>Where the night comes alive with neon dreams</p>
                </div>
              </div>

            </div>



          </div>
        </div>
      </div>
    </section>
	</>
  )
}

export default Venue
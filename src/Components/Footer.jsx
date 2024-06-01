import React from 'react'
// Imported Icons ===>
// import {SiGmail} from 'react-icons/si'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineYoutube} from 'react-icons/ai'
// import { Button } from 'react-bootstrap'



const Footer = () => {
  return (
    <div className='Footer'>

        <div className='sectionContainer container grid'>
            <div className='gridOne'>
            </div>
            <div className='button'>
            Contact Us
            </div>
            <div className='footer-text'>
            <p>The true worth of a person is determined by the way they design their parties,
            that's why you must approach us
            </p>
            </div>
            <div className="socialIcon-flex">
            {/* <SiGmail className='icon'/> */}
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"> <AiOutlineMail className='icon'/></a>
            <a href='https://www.youtube.com/watch?v=xm3YgoEiEDc'><AiOutlineYoutube className='icon'/></a>
            </div>   
        </div>
    </div>
  )
}

export default Footer
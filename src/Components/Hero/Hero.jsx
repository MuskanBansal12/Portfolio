import React from 'react'
import "./Hero.css"
import profile_img from "../../assets/profile.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id="home" className='hero'>
        <img src={profile_img} alt="" />
        <h1>I'm Muskan Bansal, a computer science student majoring in AI.</h1>
        <p>Currently learning and exploring the world of AI and Machine Learning.</p>
        <div className='hero-action'>
            <div className='hero-connect'><AnchorLink className="anchor-link" offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className='hero-resume'><AnchorLink className="anchor-link" offset={50} href='#https://drive.google.com/file/d/1WF0HbUy9MKG70swjAfKVsS5JsW66wqV3/view?usp=drive_link'>My Resume</AnchorLink></div>


        </div>
      
    </div>
  )
}

export default Hero

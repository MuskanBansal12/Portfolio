import React from 'react'
import "./About.css"
//import theme_pattern  from '../../assets/theme_pattern.png'
import profile_img from  '../../assets/profile.jpg'


const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
      
      </div>
      <div id="about" className='about-sections'>
        <div className="about-left">
            <img src={profile_img} alt="Profile" className="profile_img" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am a computer science student specializing in artificial intelligence, with a robust understanding of statistics and hands-on experience in full-stack development, enabling me to analyze data effectively and build comprehensive applications. </p>
                <p> My goal is to leverage technology to create innovative solutions that address real-world challenges.</p>
            </div>
            <div className="about-skills">

                <div className="about-skill"><p>Python</p><hr style={{width:"80%"}}/></div>
                <div className="about-skill"><p>Java</p><hr style={{width:"40%"}}/></div>
                <div className="about-skill"><p>C</p><hr style={{width:"80%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"10%"}}/></div>
                <div className="about-skill"><p>MySQL</p><hr style={{width:"90%"}}/></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About

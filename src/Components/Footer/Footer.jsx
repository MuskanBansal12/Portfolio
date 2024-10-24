import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <p>I am a computer science student specializing in artificial intelligence, with a robust understanding of statistics and hands-on experience in full-stack development, enabling me to analyze data effectively and build comprehensive applications.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <input type="email" placeholder='Enter your email'/>
                    </div>
                </div>
            </div>
        <hr/>
    </div>
  )
}

export default Footer

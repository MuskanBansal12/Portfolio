import React from 'react'
import "./Contact.css"
import mail from '../../assets/mail.png'
import linkedin from '../../assets/link.jpg'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "b068c5af-8cbf-4daf-b83f-8c5ed83622be");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }};
  return (
    <div  id="contact" className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
        </div>
        <div className='contact-section'>
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I am currently available to work as an intern for your company, so feel free to send me a message regarding this. You can contact me anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail} alt="mail" />
                        <p>muskanbansal1202@gmail.com</p>

                    </div>
                    <div className="contact-detail">
                        <img src={linkedin} alt="linkedin"/>
                        <p>https://www.linkedin.com/in/muskanbansal12/</p>
                    </div>
                    
                </div>
            
            </div>
            <form onSubmit ={onSubmit} className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'/>
                <button type='submit' className="contact-submit">Submit</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact

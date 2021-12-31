import React,{useRef,useState,useContext} from 'react'
import './contact.css'
import Phone from '../../images/phone.png'
import Email from '../../images/email.png'
import Address from '../../images/address.png'
import emailjs from 'emailjs-com';
import {ThemeContext} from '../../context'

function Contact() {
    const theme = useContext(ThemeContext)
    const darkMode=theme.state.darkMode;
    const formRef = useRef()
    const [done, setDone] = useState(1)
    const handleSubmit=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_lwxcx4m', 'template_y95xiva', formRef.current, 'user_nEojpxaG0KgLrcgpLuCQQ')
        .then((result) => {
          console.log(result.text);
          setDone(2);
        }, (error) => {
          console.log(error.text);
          setDone(3);
        });
    }
    return (
        <div className='contact'>
            <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">Hire me!</h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <img src={Phone} alt="" className="contact-icon" />
                            +91 81309-14724
                        </div>
                        <div className="contact-info-item">
                            <img src={Email} alt="" className="contact-icon" />
                            mangalpandeyop@gmail.com
                        </div>
                        <div className="contact-info-item">
                            <img src={Address} alt="" className="contact-icon" />
                            Noida, U.P. India!
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-desc">
                        Let's get connected
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor:darkMode?'#333':'white'}} type="text" placeholder='Name' name="user_name" />
                        <input style={{backgroundColor:darkMode?'#333':'white'}} type="text" placeholder='Subject' name="user_subject" />
                        <input style={{backgroundColor:darkMode?'#333':'white'}} type="text" placeholder='Email' name="user_email" />
                        <textarea style={{backgroundColor:darkMode?'#333':'white'}} rows="5" placeholder='Message' name="message"></textarea>
                        <button>Submit</button>
                        {done===2?"Thank you for contacting":""}
                        {done===3?"There were some error and we couldn't recieve your mail":""}
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Contact

import React from 'react'
import avatar from '../../images/avatar3.png'
import "./intro.css"
import Typewriter from 'typewriter-effect';


const Intro = () => {
    return (
        <div className='intro'>
            <div className="intro-left">
                <div className="intro-left-wrapper">
                        <h2 className='intro-hi'> 
                        <img src='https://1.bp.blogspot.com/-gpPCNM2JjBs/W28oMHeNHqI/AAAAAAAX7u8/LQtL7fq0ZcsDrRicHfQJQMeFpwpLlVFMwCLcBGAs/s1600/AW1528222_00.gif' alt="Hi there!" className="hi-img" />
                        
                        <br/><br/> I'm </h2>
                        <h1 className="intro-myname"> Pandey, Harimangal</h1>
                            <div className="intro-title">
                            <Typewriter
                                options={{
                                    strings: ['Web Developer!', 'Game Developer!','UI/UX Designer!','Chess Enthusiast!','Cryptocurrency Trader!'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />                                
                            </div>
                            
                            <div className="intro-desc">
                                I design and develop services for customers of all sizes specializing in creating stylish, modern websites, web service online
                                <br/>
                                <br/>
                                <div className="resume">
                                Download my Curriculam Vitae  &nbsp; &nbsp;   
                                <a href='https://download1478.mediafire.com/r7c8htebp4tg/75oayausmgvyzi9/Resume+%281%29.pdf'>
                                   <button className='resume-btn'>CV</button>
                                </a>
                            </div>
                            </div>
                           
                    </div>
                </div>
            <div className="intro-right">
                <div className="intro-bg"></div>
                <img src={avatar} alt="human" className="intro-image" />
            </div>
        </div>
    )
}

export default Intro
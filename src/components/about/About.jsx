import React,{useContext} from 'react'
import './about.css'
import me from '../../images/port.jpg'

import {ThemeContext} from '../../context'


function About() {
    const theme = useContext(ThemeContext)
    const darkMode=theme.state.darkMode;
    return (
        <div className='about' >
          
            <div className="about-left">

                <div style={{backgroundColor:darkMode?"#a8ccd7":"grey"}}className="about-card bg"></div>
                <div className="about-card">
                    <img src={me} alt="" className="about-image" />
                </div>

            </div>
            <div className="about-right">
                <h1 className="about-title">About me</h1>
                <div className="about-sub">
                I'm a Front End Developer from <br></br>Bangalore, India. 
                </div>
                <div className="about-description">
                <br/><br/>
                I enjoy taking complex problems and turning them into simple and beautiful interface designs.
                I also love the logic and structure of coding and always strive to write elegant and
                efficient code whether <strong><i><b>Javascript</b></i></strong>, <strong><i>React</i></strong> , <strong><i>Angular</i></strong> ,<strong><i>Typescript</i></strong> , <strong><i>JSX</i></strong> , <strong><i>HTML</i></strong> , <strong><i>CSS</i></strong>.
                <br/><br/>
                When I'm not coding or pushing pixels, you'll find me in the Gym, Chess Club, Trading Crypto Coins, 
                or playing Football.
                <br/><br/>
                <hr/>
                Connect with me on my social handles
                
                </div>
                <div className='spacer icons'>
                <div className="social-handles">
                    <div className="social-handles-items">
                    <a href="https://www.linkedin.com/in/harimangal-pandey-14771640/" target="_blank" rel='noreferrer'>
                        <img alt="" className='social-handles-images' src="https://i.pinimg.com/originals/de/b4/6f/deb46f02a59e3b3a2aa58fac16290d63.gif"/>
                        </a>
                    </div>
                    <div className="social-handles-items">
                    <a href="https://twitter.com/harimangalp" target="_blank" rel='noreferrer'>
                        <img alt="" className='social-handles-images' src="https://techcrunch.com/wp-content/uploads/2014/06/twitter-rise.gif?w=730&crop=1"/>
                        </a>
                    </div>
                    {/* <div className="social-handles-items">
                        <a href="https://instagram.com/divinecoded" target="_blank" rel='noreferrer'>
                        <img alt="" className='social-handles-images' src="https://i0.wp.com/www.edigitalagency.com.au/wp-content/uploads/Instagram-logo-gif-dot-flashing.gif"/>
                        </a>
                        
                    </div> */}
                </div>
                </div>
            </div>
        </div>
    )
}

export default About

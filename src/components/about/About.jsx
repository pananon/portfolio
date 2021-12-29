import React from 'react'
import './about.css'
import me from '../../images/myself.jpg'

function About() {
    return (
        <div className='about'>
            <div className="about-left">

                <div className="about-card bg"></div>
                <div className="about-card">
                    <img src={me} alt="" className="about-image" />
                </div>

            </div>
            <div className="about-right">
                <h1 className="about-title">About me</h1>
                <p className="about-sub">
                    It's a long established fact
                </p>
                <p className="about-description">
                    This is some description which i will update sooner or later.
                </p>
            </div>
        </div>
    )
}

export default About

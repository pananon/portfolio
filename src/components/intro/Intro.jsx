import React from 'react'
// import me from '../../images/me.png'
import avatar from '../../images/avatar.png'
import "./intro.css"
const Intro = () => {
    return (
        <div className='intro'>
            <div className="intro-left">
                <div className="intro-left-wrapper">
                        <h2 className='intro-hi'> Hey! My name is</h2>
                        <h1 className="intro-myname"> Pandey, Harimangal</h1>
                            <div className="intro-title">
                                <div className="intro-title-wrapper">
                                    <div className="intro-title-item"> Web Developer</div>
                                    <div className="intro-title-item">Game Developer</div>
                                    <div className="intro-title-item">UI/ UX Designer</div>
                                    <div className="intro-title-item">Chess Enthusiast</div>
                                    <div className="intro-title-item">Cryptocurrency Trader</div>

                                </div>
                            </div>
                            <p className="intro-desc">
                                I design and develop services for customers of all sizes specializing in creating stylish, modern websites, web service online
                            </p>
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
import React from 'react'
import "./Hero.css";
import {HiLocationMarker} from 'react-icons/hi'
const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                {/* left */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-bg"/>
                        <h1>M & A'S <br/> Real Estate <br/> Property
                        </h1>
                    </div>
                    <div className="flexColStart hero-des">
                    <span>Purchase your dream home</span>
                    <span>Explore the taste of comfy and luxurious villas</span>
                    </div>
                   <div className="flexCenter search-bar">
                    <HiLocationMarker color="violet" size={25}/>
                    <input type="text" />
                    <button className='button'>Search</button>
                   </div>
                   <div className="flexCenter stats">
                    <div className="flexColStart stat">
                        <span></span>
                        <span>+</span>
                    </div>
                   </div>
                </div>
                 {/* right */}
                <div className="flexCenter hero-right">
                    <div className="image-container">
                    <img src="./backg.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
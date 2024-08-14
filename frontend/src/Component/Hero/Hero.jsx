
import React from "react"
import "../Hero/Hero.css"
import hand_icon from "../Image/hand_icon.png";
import hero_image from "../Image/hero_image.png";

export default function Hero(){
    return (
        <>
            <div className="hero">
                <div className="hero-left">
                    <h2>New Arrivals Only</h2>
                    <div>
                       <div className="hero-hand-icon">
                           <p> new </p>
                           <img src={hand_icon} alt="" />
                       </div>
                       <p>collections</p>
                       <p>for everyone</p>
                   </div>
                   <div className="hero-latest-btn">
                        <div className="Latest Collection"></div>
                        <span>Latest Collections <ion-icon name="arrow-forward-circle-outline"></ion-icon></span>
                   </div>
                </div>
                <div className="hero-right">
                        <img src={hero_image} alt="" />
                </div>
            </div>

        </>
    );
};
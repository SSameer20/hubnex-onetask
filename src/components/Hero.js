import React from 'react'
import '../styles/hero.css'


export default function Hero() {
    return (
        <>
            <div className="content">
                <div className="tag1">
                    <p>Official Framer Resourcespan</p><span>Read more -</span>
                </div>


                <div className="title">
                    <img src="https://framerusercontent.com/images/6uMPQdAY2MfmgnMc11g8IK2WiMQ.png?scale-down-to=512" alt="" srcset="" id="map" />
                    <div id="s-title"><p>One Task at a Time</p></div>
                    <img src="https://framerusercontent.com/images/TMSU7EEn6tWu1bXQjXJoGO6p1rA.png?scale-down-to=512" alt="" id="block" />
                </div>

                <div className='subtitle'>
                    <p>Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes, one task at a time.</p>
                </div>

                <button> Get Started</button>

            </div>

        </>
    )
}

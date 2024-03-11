import React from 'react'
import '../styles/card.css'

export default function Card() {
  return (
    <div>
        <div className="info">
            <p id="info-title">Everything you need</p>
            <p id="info-matter">Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.</p>
            <div className='cards'>
                <div className="card">
                    <span id="logo"></span>
                    <p className="card-title">Integration ecosystem</p>
                    <p className="card-info">Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.</p>
                </div>

                <div className="card">
                    <span id="logo"></span>
                    <p className="card-title">Goal setting and tracking</p>
                    <p className="card-info">Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.</p>
                </div>

                <div className="card">
                    <span id="logo"></span>
                    <p className="card-title">Secure data encryption</p>
                    <p className="card-info">With end-to-end encryption, your data is securely stored and protected from unauthorized access.</p>
                </div>

            </div>
        </div>
    </div>
  )
}

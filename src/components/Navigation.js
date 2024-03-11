import React from 'react'
import '../styles/navigation.css'

export default function Navigation() {
  return (
    <div className='navigation-bar'>
      <div className="banner">
        <p>SaaS Conf 2024 . Dive into the Future of SaaS <span> Register now -</span></p>
      </div>

      <div className="navigation">
        <div className="nav-bar">
          <div className="icon">
            <div className="inner-icon">
              <div className="inner-inner-icon">

              </div>

            </div>
          </div>

          <div class="custom-select">
            <select name="Features" id="features1" class="features-select">
              <option value="" selected hidden>Features</option>
              <option value="tasks"><span>O</span>Tasks</option>
              <option value="dashboard"><span>O</span>Dashboard</option>
              <option value="integration"><span>O</span>Integrations</option>
              <option value="calendar"><span>O</span>Calendar</option>
            </select>
          </div>

          <div class="custom-select">
            <select name="Company" id="company" class="company-select">
              <option value="" selected hidden>Company</option>
              <option value="about"><span>O</span>About</option>
              <option value="blog"><span>O</span>Blog</option>
              <option value="career"><span>O</span>Careers</option>
            </select>
          </div>


        </div>


        <div className="nav-btn">
          <p>Get for free</p>

        </div>

      </div>


    </div>
  )
}

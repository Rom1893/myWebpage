import React from 'react'
import "./About.css"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className="about__me-image">
          <div className='image' />
        </div>


        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Science Background</h5>
              <small>Biochemist</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Teamwork</h5>
              <small>Good enviroment makes a good product</small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Projects</h5>
              <small>More than 20 repositories on github</small>
            </article>
          </div>

          <p>
            Since I was a child, I grew around technology, 
            I learned how to build a pc from a young age, 
            how it worked and what needed for it to work in terms 
            of hardware and software. I decided to learn how to code 
            not only to find a job in this field, but out of pure passion. 
            Software development has offered me an engaging challenge to continually 
            learn and improve my skills in creating high quality software. 
            I usually find myself coding or learning about new technologies in my free time, 
            this has definitely become a big part of my life.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
        </div>


      </div>

    </section>
  )
}

export default About
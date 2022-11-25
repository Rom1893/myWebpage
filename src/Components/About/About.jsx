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
            As a child, I grew surrounded by computer technology.
            At the age of seven, I was fascinated with building my own PC- in times that this was
            not as easy and accessible as nowadays. After a lot of trial and error and a good dose
            of persistence, I soon realized how things worked under the hood: how different objects
            worked together and what hardware and software requirements I would need for my projects.
            Later on, after completing my degree in biochemistry, coding got into my way - and,
            I have to say, with the very same joy I experienced as a child. Naturally, coding would
            open up a myriad of opportunities with my background in science, workwise. Yet the real
            reason to learn to code came out of pure passion: I just like coding.
            Software development does not need an introduction nowadays. It's become an
            engaging and challenging field; one that perfectly fits with my aims and interests.
            This is precisely where I am now, perfecting my IT skills every day, coding during
            my spare times and checking on new technologies (which has become my hobby).
            All this while being a Biochemist.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
        </div>


      </div>

    </section>
  )
}

export default About
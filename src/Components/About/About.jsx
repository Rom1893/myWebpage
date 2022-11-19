import React from 'react'
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <div className='image'/>
          </div>
        </div>


        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Background</h5>
              <small>Biochemist</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Cleints?</h5>
              <small>Biochemist</small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Projects??</h5>
              <small>20+</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae obcaecati similique assumenda minus asperiores, molestias, corporis repellat veniam, illum enim perspiciatis odit officia sint aspernatur eum sapiente temporibus! Eaque, illum.
          </p>
        </div>

        <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
      </div>

    </section>
  )
}

export default About
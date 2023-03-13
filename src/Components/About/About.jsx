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
          As a passionate Full-Stack developer, I have extensive 
          experience using HTML, CSS, JavaScript, Node, Express, MongoDB, 
          Mongoose, React, ReactHooks, React-Router, Material UI, Bootstrap, Bulma, 
          and Next.js. I take pride in my ability to solve complex problems and thrive 
          in collaborative environments. My bilingual skills have allowed me to communicate 
          effectively with clients and colleagues alike. My passion for technology began at a young age, 
          and I continue to learn new skills and coding techniques in my free time. I hold a degree in 
          Biochemistry and completed my thesis in Data Science Bioinformatics. I made the transition to a 
          web developer career and am currently a Jr Developer, with the goal of becoming a senior developer 
          in the future.
          In summary, I bring a diverse skill set, 
          a passion for technology, and a commitment to personal 
          and professional growth to my work as a Full-Stack developer
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
        </div>


      </div>

    </section>
  )
}

export default About
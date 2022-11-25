import React from 'react'
import "./Experience.css"
import { BsFillPatchCheckFill } from "react-icons/bs"

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience-front">
          <h3>Front-end Experience</h3>
          <div className="experience__content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>HTML, CSS & JS</h4>
                
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>React.js</h4>
                
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>NEXT.js</h4>
                
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>ReactRouter</h4>
                
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Bootstrap</h4>
                
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Material UI</h4>
                
              </div>
            </article>
          </div>
        </div>
        <div className="experience-back">
          <h3>Back-end & Others Experience</h3>
          <div className="experience__content">
          <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Node.js</h4>
                
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>MongoDB</h4>
                
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Mongoose</h4>
                
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Express</h4>
                
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>MATLAB</h4>
                
              </div>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Python</h4>
                
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience
import React from 'react'
import "./Experience"
import { BsFillPatchCheckFill } from "react-icons/bs"

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience-front">
          <h3>Development Experience</h3>
          <div className="experience__content">
            <article className='experience_details'>
              <BsFillPatchCheckFill/>
              <h4>React.js</h4>
              <small className='text-light'>huh?</small>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill/>
              <h4>ReactRouter</h4>
              <small className='text-light'>huh?</small>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill/>
              <h4>HTML</h4>
              <small className='text-light'>huh?</small>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill/>
              <h4>HTML</h4>
              <small className='text-light'>huh?</small>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill/>
              <h4>HTML</h4>
              <small className='text-light'>huh?</small>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill/>
              <h4>HTML</h4>
              <small className='text-light'>huh?</small>
            </article>
          </div>
        </div>
        <div className="experience-back">
        <article className='experience_details'>
              <BsFillPatchCheckFill/>
              <h4>HTML</h4>
              <small className='text-light'>huh?</small>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill/>
              <h4>HTML</h4>
              <small className='text-light'>huh?</small>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill/>
              <h4>HTML</h4>
              <small className='text-light'>huh?</small>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill/>
              <h4>HTML</h4>
              <small className='text-light'>huh?</small>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill/>
              <h4>HTML</h4>
              <small className='text-light'>huh?</small>
            </article>

            <article className='experience_details'>
              <BsFillPatchCheckFill/>
              <h4>HTML</h4>
              <small className='text-light'>huh?</small>
            </article>
        </div>
      </div>

    </section>
  )
}

export default Experience
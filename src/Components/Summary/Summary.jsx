import React from 'react'
import "./Summary.css"
import { AiOutlineCheck } from "react-icons/ai"

export default function Summary() {
  return (
    <section id='Summary'>
      <h5>More</h5>
      <h2>About me</h2>

      <div className="container summary_container">
        <article className='summary'>
          <div className="summary_head">
            <h3>My non-tecnical Skills</h3>
          </div>
          <ul className='summary_list'>
            <li>
              <AiOutlineCheck className='summary_icon' />
              <p>I excel at problem solving, helps me out solving problems even in cases with little to no previous knowledge</p>
            </li>
            <li>
              <AiOutlineCheck className='summary_icon' />
              <p>I am 100% bilingual in Spanish-English</p>
            </li>
            <li>
              <AiOutlineCheck className='summary_icon' />
              <p>I believe that a good work environment is essential for creating a good product</p>
            </li>
            <li>
              <AiOutlineCheck className='summary_icon' />
              <p>I possess a methodical way for approaching different problems due to my science background</p>
            </li>
            <li>
              <AiOutlineCheck className='summary_icon' />
              <p>Practical, friendly, I always look for the most positive outcome of a situation</p>
            </li>
            <li>
              <AiOutlineCheck className='summary_icon' />
              <p>IM GOOD</p>
            </li>
            
          </ul>
        </article>

        <div className="summary_image"/>
      </div>
    </section>
  )
}

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
              <p>Advanced problem-solving skills, with a solid background on science methodologies</p>
            </li>
            <li>
              <AiOutlineCheck className='summary_icon' />
              <p>Fluency in both English and Spanish</p>
            </li>
            <li>
              <AiOutlineCheck className='summary_icon' />
              <p>A good working environment is essential for creating good products!</p>
            </li>
            <li>
              <AiOutlineCheck className='summary_icon' />
              <p>And, of course, looking at the bright side of life and issues.</p>
            </li>
            
          </ul>
        </article>

        <div className="summary_image"/>
      </div>
    </section>
  )
}

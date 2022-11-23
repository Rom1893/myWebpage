import React from 'react'
import "./Summary.css"
import { AiOutlineCheck } from "react-icons/ai"

export default function Summary() {
  return (
    <section id='Summary'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container summary_container">
        <article className='summary'>
          <div className="summary_head">
            <h3>UI/UX</h3>
          </div>
          <ul className='summary_list'>
            <li>
              <AiOutlineCheck className='summary_icon' />
              <p>IM GOOD</p>
            </li>
            <li>
              <AiOutlineCheck className='summary_icon' />
              <p>IM GOOD</p>
            </li>
            <li>
              <AiOutlineCheck className='summary_icon' />
              <p>IM GOOD</p>
            </li>
            <li>
              <AiOutlineCheck className='summary_icon' />
              <p>IM GOOD</p>
            </li>
            <li>
              <AiOutlineCheck className='summary_icon' />
              <p>IM GOOD</p>
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

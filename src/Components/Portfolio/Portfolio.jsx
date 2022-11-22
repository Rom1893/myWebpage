import React from 'react'
import "./Portfolio.css"

export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image"></div>
          <div className="portfolio_image" />
          <h3>This is a portfolio item</h3>
          <div className="portoflio-item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>


      </div>
    </section>
  )
}

import React from 'react'

export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image"></div>
          <h3>This is title</h3>
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
        </article>
      </div>
    </section>
  )
}

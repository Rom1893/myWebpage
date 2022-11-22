import React from 'react'
import "./Portfolio.css"
import PortfolioData from './PortfolioData'

export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {PortfolioData.map(m => (
          <article className='portfolio_item' key={m.id}>
            <div className="port">
              <div className={`portfolio_image${m.id}`} />
              <h3>{m.title}</h3>
              <div className="portoflio-item-cta">
                <a href="https://github.com" className='btn'>Github</a>
                <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

import React from 'react'
import "./Portfolio.css"
import PortfolioData from './PortfolioData'
import ppt from "../../Assets/RodrigoMoran-Congress.pdf"

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
                <a href={m.github} target="_blank" className='btn'>Github</a>
                <a href={m.demo} target="_blank" className='btn btn-primary'>Live Demo</a>
              </div>
            </div>
          </article>
        ))}
        <article className='portfolio_item'>
          <div className="port">
            <div className="portfolio_image5" />
            <h3>This Portfolio Page</h3>
            <div className="portoflio-item-cta">
              <a href="https://github.com/Rom1893/myWebpage" target="_blank" className='btn'>Github</a>
            </div>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="port">
            <div className="portfolio_image6" />
            <h3>Data Science Thesis (Congress Presentation)</h3>
            <div className="portoflio-item-cta">
              <a href={ppt} download target="_blank" className='btn btn-primary'>Download</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

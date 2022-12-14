import React from 'react'
import "./Footer.css"
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"

export default function Footer() {
  return (
    <footer>
      <a href="#" className='footer_logo'>RM</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_social">
        <a href="https://www.linkedin.com/in/rodrigo-mor%C3%A1n-figueroa-6a944316b/" target="_blank"><BsLinkedin size={35} /></a>
        <a href="https://github.com/Rom1893" target="_blank"><BsGithub size={35} /></a>
      </div>
    </footer>
  )
}

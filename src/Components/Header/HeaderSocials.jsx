import React from 'react'
import "./Header.css"
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/rodrigo-mor%C3%A1n-figueroa-6a944316b/" target="_blank"><BsLinkedin size={35}/></a>
        <a href="https://github.com/Rom1893" target="_blank"><BsGithub size={35}/></a>
    </div>
  )
}

export default HeaderSocials
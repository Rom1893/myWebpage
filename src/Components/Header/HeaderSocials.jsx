import React from 'react'
import "./Header.css"
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin size={35}/></a>
        <a href="https://github.com" target="_blank"><BsGithub size={35}/></a>
    </div>
  )
}

export default HeaderSocials
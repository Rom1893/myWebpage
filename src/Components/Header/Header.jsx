import React from 'react'
import "./Header.css"
import CTA from './CTA'
import ME from "../../Assets/rodrigo.jpg"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Rodrigo Morán</h1>
        <h5 className='text-light'>Front-end React Developer</h5>
        <CTA />
        <HeaderSocials />

        <div class="box">
          <span></span>
        </div>

        <a href="" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}


export default Header


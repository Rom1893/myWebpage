import React from 'react'
import "./Header.css"
import CTA from './CTA'
import ME from "../../Assets/rodrigo.jpg"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
          <h5>Hello im h5</h5>
          <h1>Rodrigo Morán</h1>
          <h5 className='text-light'>FrontEnd Developer</h5>
          <CTA/>
          <HeaderSocials/>

          <div className="me">
            <img src={ME} alt="" />
          </div>

          <a href="" className='scroll_down'>Scroll Down</a>
        </div>
    </header>
  )
}


export default Header
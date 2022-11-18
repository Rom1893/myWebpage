import React from 'react'
import "./Nav.css"
import {AiOutlineHome, AiOutlineUser, AiOutlineMessage} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {MdOutlineHomeRepairService} from "react-icons/md"

export default function Nav() {
  return (
    <nav className='nav'>
      <a href='#'><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#services"><MdOutlineHomeRepairService/></a>
      <a href="#contact"><AiOutlineMessage/></a>
    </nav>
  )
}

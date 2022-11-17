import React from 'react'
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {MdOutlineHomeRepairService, MdOutlineContactPhone} from "react-icons/md"

export default function Nav() {
  return (
    <nav>
      <a><AiOutlineHome/></a>
      <a><AiOutlineUser/></a>
      <a><BiBook/></a>
      <a><MdOutlineHomeRepairService/></a>
      <a><MdOutlineContactPhone/></a>
    </nav>
  )
}

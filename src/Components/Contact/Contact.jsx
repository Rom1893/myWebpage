import React from 'react'
import "./Contact.css"
import { MdOutlineMailOutline } from "react-icons/md"
import { BsWhatsapp } from "react-icons/bs"

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineMailOutline className='contact_option-icon' size={40} />
            <h4>Email</h4>
            <h5>rodrigobq18@gmail.com</h5>
            <a href="mailto:rodrigobq18@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon' size={40} />
            <h4>WhatsApp</h4>
            <h5>WhatsApp Number</h5>
            <a href="https://api.whatsapp.com/send?phone=56977422412" target="_blank">Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Fullname' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="textarea" placeholder='Your message here' cols="30" rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
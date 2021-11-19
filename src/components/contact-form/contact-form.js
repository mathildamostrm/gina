import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

function ContactForm () {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('gina', 'template_gina', form.current, 'user_vToDYJs5h0fUT5PHPf5sd')
      .then((result) => {
          console.log(result.text)
      }, (error) => {
          console.log(error.text)
      })
    e.target.reset()
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input 
        type="text" 
        name="name" />
      <label>Company</label>
      <input 
        type="text" 
      name="company" />
      <label>Email</label>
      <input 
        type="email" 
        name="email" />
      <label>Link</label>
      <input 
        type="text" 
        name="link" />
      <label>Km</label>
      <input 
        type="text" 
        name="km" />
      <label>Message</label>
      <textarea 
        name="message" />
      <input type="submit" value="Send" />
    </form>
  )
}

export default ContactForm


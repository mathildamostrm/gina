import React from 'react'
import './form.css'

const ContactFormSuccess = () => {
    return (
        <div className='form-content-right'>
            <div className='form-success'>I have recevied your request, thank you!</div>
            <img src={require('../../images/logo-white.jpg').default} alt='success-image' className='form-img-2'></img>
        </div>
    )
}

export default ContactFormSuccess
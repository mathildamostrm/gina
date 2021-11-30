import React from 'react'
import './styles/form.css'

const ContactFormSuccess = () => {
    return (
        <div className='form-content-right'>
            <div className='form-success'>I have recevied your request, thank you!</div>
            <img src={require('../../images/logo-black.jpg').default} alt='success' className='form-img-2'></img>
        </div>
    )
}

export default ContactFormSuccess
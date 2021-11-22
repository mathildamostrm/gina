import React, { useState } from 'react'
import SponsorKmForm from './sponsor-km-form'
import ContactFormSuccess from './contact-form-success'
import './form.css'

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }

    return (
     <>
        <div className='form-container'>
            <div className='form-content-left'>
                <img className='form-img' src={require('../../images/logo-white.jpg').default} alt='form-img'></img>
                <form action="https://www.paypal.com/donate" method="post" target="_top">
                   <input type="hidden" name="hosted_button_id" value="DBHH92WF85MZL" />
                   <input type="image" src="https://www.paypalobjects.com/en_US/NO/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                   <img alt="" border="0" src="https://www.paypal.com/en_NO/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </div>
        {!isSubmitted ? (
        <SponsorKmForm submitForm={submitForm} />
        ) : (
        <ContactFormSuccess />)}
        </div>
     </>
    )
}

export default Form
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
                <img className='form-img' src={require('../../images/ColourWhiteBackground_NoTitle (1).jpg').default} alt='form-img'></img>
            </div>
        {!isSubmitted ? (
        <SponsorKmForm submitForm={submitForm} />
        ) : (<ContactFormSuccess />)}
        </div>
        </>
    )
}

export default Form
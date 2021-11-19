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
            <span className='close-btn'>x</span>
            <div className='form-content-left'>
                <img src='' alt='form-img'></img>
            </div>
        {!isSubmitted ? (
        <SponsorKmForm submitForm={submitForm} />
        ) : (<ContactFormSuccess />)}
        </div>
        </>
    )
}

export default Form
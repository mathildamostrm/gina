import React, { useState } from 'react'
import SponsorKmForm from './sponsor-km-form'
import ContactFormSuccess from './contact-form-success'
import Payment from './payment'
import './styles/form.css'
import KmList from './km-list'

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }

    return (
     <>
        <div className='form-container'>
            <div className='form-content-left'>
                <KmList />
              {/* <img className='form-img' src={require('../../images/logo-black.jpg').default} alt='form'></img>  */}
            </div>
        {!isSubmitted ? (
        <SponsorKmForm submitForm={submitForm} />
        ) : (
        <ContactFormSuccess />)}
        </div>
        <Payment />
     </>
    )
}

export default Form
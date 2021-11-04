import React from 'react'
import ContactSection from '../../components/contact-section/contact-section'
import { homeObjOne } from './Data'

function Contact() {
    return (
        <>
        <ContactSection {...homeObjOne} />
        </>
    )
}

export default Contact
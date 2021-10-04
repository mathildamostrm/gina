import React from 'react'
import ContactSection from '../../components/ContactSection/ContactSection'
import { homeObjOne } from '../Contact/Data'

function Contact() {
    return (
        <>
        <ContactSection {...homeObjOne} />
        </>
    )
}

export default Contact
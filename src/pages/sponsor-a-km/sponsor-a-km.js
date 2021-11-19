import React from 'react'
import { Form, TextSection } from '../../components'
import { homeObjOne } from './data'


function SponsorKilometer() {
    return(
        <>
        <TextSection {...homeObjOne}/>
        <Form />
        </>
    ) 
}

export default SponsorKilometer
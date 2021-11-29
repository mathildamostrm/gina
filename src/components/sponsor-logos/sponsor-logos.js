import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../global-styles'
import { logos } from './logos'
import './sponsor-logos.css'


function SponsorLogosSection() {

  const listLogos = logos.map(({id, src, title, description}) =>
  <img key={id} src={src} title={title} description={description} className='img'/>
  )

  return (
    <>
    <Container>
        <h1 className='headline'>EXPEDITION PARTNERS</h1>
        <div className='logos'>{listLogos}</div>
    </Container>
    </>
  )
}

export default SponsorLogosSection
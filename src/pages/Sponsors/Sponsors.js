import React from 'react'
import { SponsorSection } from '../../components'
import { homeObjOne, homeObjTwo } from './data'

function Sponsors() {
  return (
    <>
    <SponsorSection {...homeObjOne} />
    <SponsorSection {...homeObjTwo} />
    </>
  )
}

export default Sponsors
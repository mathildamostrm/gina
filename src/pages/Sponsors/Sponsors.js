import React from 'react'
import { SponsorSection } from '../../components'
import { BlogSection } from '../../components'
import { homeObjOne, homeObjTwo } from './data'

function Sponsors() {
  return (
    <>
    <SponsorSection {...homeObjOne} />
    <BlogSection {...homeObjTwo} />
    </>
  )
}

export default Sponsors
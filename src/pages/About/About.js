import React from 'react'
import { AboutSection } from '../../components'
import { homeObjOne } from './data'

function About() {
  return (
    <>
      <AboutSection {...homeObjOne} />
    </>
  )
}

export default About
import React from 'react'
import { AboutSection } from '../../components'
import { homeObjOne } from './Data'

function About() {
  return (
    <>
      <AboutSection {...homeObjOne} />
    </>
  );
}

export default About
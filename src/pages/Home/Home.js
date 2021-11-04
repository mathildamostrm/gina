import React from 'react'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './data'
import { InfoSection, HeroSection } from '../../components'

function Home() {
  return (
    <>
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
    </>
  )
}

export default Home
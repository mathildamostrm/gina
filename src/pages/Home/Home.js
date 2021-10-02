import React from 'react'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data'
import { InfoSection, HeroSection } from '../../components'

function Home() {
  return (
    <>
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjFour} />
    </>
  )
}

export default Home
import React from 'react'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data'
import { InfoSection, Pricing, HeroSection } from '../../components'

function Home() {
  return (
    <>
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
     {/* <Pricing /> */}
      <InfoSection {...homeObjFour} />
    </>
  )
}

export default Home
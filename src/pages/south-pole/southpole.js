import React from 'react'
import { SouthPoleSection, SouthPoleTextSection, SouthPoleSponsorSection, SponsorLogosSection, SouthPoleTeamSection, PingvinCards } from '../../components'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './data'

function SouthPole() {
  return (
    <>
      <SouthPoleSection {...homeObjOne} />
      <SouthPoleTextSection {...homeObjTwo} />
      <SouthPoleSponsorSection {...homeObjThree} />
      <PingvinCards />
      <SponsorLogosSection />
      <SouthPoleTeamSection {...homeObjFour} />
    </>
  )
}

export default SouthPole
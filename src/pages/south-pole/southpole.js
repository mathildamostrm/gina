import React from 'react'
import { SouthPoleSection, SouthPoleSponsorSection, SponsorLogosSection, SouthPoleTeamSection, PingvinCards } from '../../components'
import { homeObjOne, homeObjThree, homeObjFour } from './data'

function SouthPole() {
  return (
    <>
      <SouthPoleSection {...homeObjOne} />
      <SouthPoleSponsorSection {...homeObjThree} />
      <PingvinCards />
      <SponsorLogosSection />
      <SouthPoleTeamSection {...homeObjFour} />
    </>
  )
}

export default SouthPole
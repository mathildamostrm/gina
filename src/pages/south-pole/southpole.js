import React from 'react'
import { SouthPoleSection, SouthPoleTextSection, SouthPoleSponsorSection, SouthPoleTeamSection, PingvinCards } from '../../components'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './data'

function SouthPole() {
  return (
    <>
      <SouthPoleSection {...homeObjOne} />
      <SouthPoleTextSection {...homeObjTwo} />
      <SouthPoleSponsorSection {...homeObjThree} />
      <PingvinCards />
      <SouthPoleTeamSection {...homeObjFour} />
    </>
  )
}

export default SouthPole
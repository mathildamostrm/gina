import React from 'react'
import { SouthPoleSection, SouthPoleTextSection, SouthPoleSponsorSection, SouthPoleTeamSection } from '../../components'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './data'

function SouthPole() {
  return (
    <>
      <SouthPoleSection {...homeObjOne} />
      <SouthPoleTextSection {...homeObjTwo} />
      <SouthPoleSponsorSection {...homeObjThree} />
      <SouthPoleTeamSection {...homeObjFour} />
    </>
  )
}

export default SouthPole
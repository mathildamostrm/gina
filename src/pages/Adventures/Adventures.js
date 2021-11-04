import React from 'react'
import { AdventureSection } from '../../components'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './data'

function Adventures() {
  return (
    <>
    <AdventureSection {...homeObjOne} />
    <AdventureSection {...homeObjTwo} />
    <AdventureSection {...homeObjThree} />
    <AdventureSection {...homeObjFour} />
    </>
  );
}

export default Adventures
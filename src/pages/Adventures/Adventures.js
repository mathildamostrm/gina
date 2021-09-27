import React from 'react'
import { AdventureSection } from '../../components'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data'

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
import React from 'react'
import { homeObjOne } from './data'
import { MediaSection } from '../../components'

function Media() {
    return (
        <>
        <MediaSection {...homeObjOne} />
        </>
    )
}

export default Media
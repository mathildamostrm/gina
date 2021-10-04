import React from 'react'
import { homeObjOne } from './Data'
import { MediaSection } from '../../components'

function Media() {
    return (
        <>
        <MediaSection {...homeObjOne} />
        </>
    )
}

export default Media
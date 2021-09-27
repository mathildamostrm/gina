import React from 'react'
import { BlogSection } from '../../components'
import { homeObjOne, homeObjTwo } from './Data'

function Blog() {
  return (
    <>
    <BlogSection {... homeObjOne}/>
    </>
  );
}

export default Blog
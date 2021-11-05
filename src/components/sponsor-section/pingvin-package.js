import React from 'react'
/*import { Button } from '../../globalStyles'
import { GiCrystalBars } from 'react-icons/gi'
import { GiCutDiamond, GiRock } from 'react-icons/gi'
import { GiFloatingCrystal } from 'react-icons/gi' */
import { IconContext } from 'react-icons/lib'
import {
  BlogTextSection,
  BlogWrapper,
  BlogHeading,
  BlogContainer,
  BlogCard,
  BlogCardInfo,
  //BlogCardIcon,
  BlogCardPlan,
  BlogCardCost,
  BlogCardLength,
  BlogCardFeatures,
  BlogCardFeature
} from './blog-section.elements'

const BlogSection = () => {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <BlogTextSection>
        <BlogWrapper>
          <BlogHeading>THIS PAGE IS UNDER CONSTRUCTION</BlogHeading>
          <BlogContainer>
            <BlogCard to='/'>
              <BlogCardInfo>
            {/*    <BlogCardIcon>
                  <GiRock />
                </BlogCardIcon> */}
                <BlogCardPlan></BlogCardPlan>
                <BlogCardCost></BlogCardCost>
                <BlogCardLength></BlogCardLength>
                <BlogCardFeatures>
                  <BlogCardFeature></BlogCardFeature>
                  <BlogCardFeature></BlogCardFeature>
                  <BlogCardFeature></BlogCardFeature>
                </BlogCardFeatures>
              {/*   <Button primary></Button> */}
              </BlogCardInfo>
            </BlogCard>
            <BlogCard to='/'>
              <BlogCardInfo>
           {/*     <BlogCardIcon>
                  <GiCrystalBars />
                </BlogCardIcon> */}
                <BlogCardPlan></BlogCardPlan>
                <BlogCardCost></BlogCardCost>
                <BlogCardLength></BlogCardLength>
                <BlogCardFeatures>
                  <BlogCardFeature></BlogCardFeature>
                  <BlogCardFeature></BlogCardFeature>
                  <BlogCardFeature></BlogCardFeature>
                </BlogCardFeatures>
              {/*  <Button primary></Button> */} 
              </BlogCardInfo>
            </BlogCard>
            <BlogCard to='/'>
              <BlogCardInfo>
             {/*  <BlogCardIcon>
                  <GiCutDiamond />
                </BlogCardIcon>  */} 
                <BlogCardPlan></BlogCardPlan>
                <BlogCardCost></BlogCardCost>
                <BlogCardLength></BlogCardLength>
                <BlogCardFeatures>
                  <BlogCardFeature></BlogCardFeature>
                  <BlogCardFeature></BlogCardFeature>
                  <BlogCardFeature></BlogCardFeature>
                </BlogCardFeatures>
              {/*  <Button primary></Button> */}
              </BlogCardInfo>
            </BlogCard>
          </BlogContainer>
        </BlogWrapper>
      </BlogTextSection>
    </IconContext.Provider>
  )
}

export default BlogSection
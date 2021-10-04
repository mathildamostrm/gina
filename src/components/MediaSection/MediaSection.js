import React from 'react'
import { Button } from '../../globalStyles'
import { IconContext } from 'react-icons/lib'
import {
  MediaTextSection,
  MediaWrapper,
  MediaHeading,
  MediaContainer,
  MediaCard,
  MediaCardInfo,
  MediaCardPlan,
  MediaCardCost,
  MediaCardLength,
  MediaCardFeatures,
  MediaCardFeature
} from './MediaSection.elements'

function MediaSection ({
    primary,
    lightBg,
    topLine,
    lightTopLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
    start,
    link
 }) {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <MediaTextSection lightBg={lightBg}>
        <MediaWrapper>
          <MediaHeading>SOME GOOD HEADLINE</MediaHeading>
          <MediaContainer>
            <MediaCard to='/'>
              <MediaCardInfo>
                <MediaCardPlan></MediaCardPlan>
                <MediaCardCost></MediaCardCost>
                <MediaCardLength></MediaCardLength>
                <MediaCardFeatures>
                  <MediaCardFeature></MediaCardFeature>
                  <MediaCardFeature></MediaCardFeature>
                  <MediaCardFeature></MediaCardFeature>
                </MediaCardFeatures>
              <Button primary></Button> 
              </MediaCardInfo>
            </MediaCard>
            <MediaCard to='/'>
              <MediaCardInfo>
                <MediaCardPlan></MediaCardPlan>
                <MediaCardCost></MediaCardCost>
                <MediaCardLength></MediaCardLength>
                <MediaCardFeatures>
                  <MediaCardFeature></MediaCardFeature>
                  <MediaCardFeature></MediaCardFeature>
                  <MediaCardFeature></MediaCardFeature>
                </MediaCardFeatures>
               <Button primary></Button> 
              </MediaCardInfo>
            </MediaCard>
            <MediaCard to='/'>
              <MediaCardInfo>
                <MediaCardPlan></MediaCardPlan>
                <MediaCardCost></MediaCardCost>
                <MediaCardLength></MediaCardLength>
                <MediaCardFeatures>
                  <MediaCardFeature></MediaCardFeature>
                  <MediaCardFeature></MediaCardFeature>
                  <MediaCardFeature></MediaCardFeature>
                </MediaCardFeatures>
              <Button primary></Button> 
              </MediaCardInfo>
            </MediaCard>
          </MediaContainer>
        </MediaWrapper>
      </MediaTextSection>
    </IconContext.Provider>
  )
}

export default MediaSection
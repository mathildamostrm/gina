import React from 'react'
import { Button } from '../../global-styles'
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
} from './media-section.elements'

function MediaSection ({

 }) {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <MediaTextSection>
        <MediaWrapper>
          <MediaHeading>SOME GOOD HEADLINE</MediaHeading>
          <MediaContainer>
            <MediaCard to='/'>
              <MediaCardInfo>
                <MediaCardPlan>PODCAST</MediaCardPlan>
                <MediaCardCost></MediaCardCost>
                <MediaCardLength></MediaCardLength>
                <MediaCardFeatures>
                  <MediaCardFeature></MediaCardFeature>
                  <MediaCardFeature></MediaCardFeature>
                  <MediaCardFeature></MediaCardFeature>
                </MediaCardFeatures>
              <Button primary>LISTEN NOW</Button> 
              </MediaCardInfo>
            </MediaCard>
            <MediaCard to='/'>
              <MediaCardInfo>
                <MediaCardPlan>ARTICLES</MediaCardPlan>
                <MediaCardCost></MediaCardCost>
                <MediaCardLength></MediaCardLength>
                <MediaCardFeatures>
                  <MediaCardFeature></MediaCardFeature>
                  <MediaCardFeature></MediaCardFeature>
                  <MediaCardFeature></MediaCardFeature>
                </MediaCardFeatures>
               <Button primary>READ NOW</Button> 
              </MediaCardInfo>
            </MediaCard>
            <MediaCard to='/'>
              <MediaCardInfo>
                <MediaCardPlan>RADIO</MediaCardPlan>
                <MediaCardCost></MediaCardCost>
                <MediaCardLength></MediaCardLength>
                <MediaCardFeatures>
                  <MediaCardFeature></MediaCardFeature>
                  <MediaCardFeature></MediaCardFeature>
                  <MediaCardFeature></MediaCardFeature>
                </MediaCardFeatures>
              <Button primary>LISTEN NOW</Button> 
              </MediaCardInfo>
            </MediaCard>
          </MediaContainer>
        </MediaWrapper>
      </MediaTextSection>
    </IconContext.Provider>
  )
}

export default MediaSection
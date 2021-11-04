import React from 'react'
import { Container /*, Button */} from '../../global-styles'
import {
  SouthPoleSec,
  SouthPoleRow,
  SouthPoleColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './southpole-section.elements'

function SouthPoleTeamSection({
 // primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  img,
  alt,
  imgStart,
  start
}) {
  return (
    <>
      <SouthPoleSec lightBg={lightBg}>
        <Container>
          <SouthPoleRow imgStart={imgStart}>
            <SouthPoleColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
              </TextWrapper>
            </SouthPoleColumn>
            <SouthPoleColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </SouthPoleColumn>
          </SouthPoleRow>
        </Container>
      </SouthPoleSec>
    </>
  )
}

export default SouthPoleTeamSection
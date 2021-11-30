import React from 'react'
//import { Link } from 'react-router-dom'
import { Container/*, Button */} from '../../global-styles'
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

function SouthPoleSection({
  //primary,
  lightBg,
  topLine,
  topLineOne,
  topLineTwo,
  topLineThree,
  topLineFour,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  descriptionOne,
  descriptionTwo,
  descriptionThree,
  descriptionFour,
  //buttonLabel,
  img,
  alt,
  imgStart,
  start,
 // link
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
          <SouthPoleRow imgStart={imgStart}>
            <SouthPoleColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLineOne}</TopLine>
                <Subtitle lightTextDesc={lightTextDesc}>{descriptionOne}</Subtitle>
                <TopLine lightTopLine={lightTopLine}>{topLineTwo}</TopLine>
                <Subtitle lightTextDesc={lightTextDesc}>{descriptionTwo}</Subtitle>
              </TextWrapper>
            </SouthPoleColumn>
            <SouthPoleColumn>
            <TopLine lightTopLine={lightTopLine}>{topLineThree}</TopLine>
                <Subtitle lightTextDesc={lightTextDesc}>{descriptionThree}</Subtitle>
                <TopLine lightTopLine={lightTopLine}>{topLineFour}</TopLine>
                <Subtitle lightTextDesc={lightTextDesc}>{descriptionFour}</Subtitle>
            </SouthPoleColumn>
          </SouthPoleRow>
        </Container>
      </SouthPoleSec>
    </>
  )
}

export default SouthPoleSection
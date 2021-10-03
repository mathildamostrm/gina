import React from 'react'
//import { Link } from 'react-router-dom'
import { Container/*, Button */ } from '../../globalStyles'
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
} from './SouthPoleSection.elements'

function SouthPoleTextSection({
  //primary,
  lightBg,
  topLineOne,
  topLineTwo,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  descriptionOne,
  descriptionTwo,
  img,
  alt,
  imgStart,
  start,
  //link
}) {
  return (
    <>
      <SouthPoleSec lightBg={lightBg}>
        <Container>
          <SouthPoleRow imgStart={imgStart}>
            <SouthPoleColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLineOne}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{descriptionOne}</Subtitle>
                <TopLine lightTopLine={lightTopLine}>{topLineTwo}</TopLine>
                <Subtitle lightTextDesc={lightTextDesc}>{descriptionTwo}</Subtitle>
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

export default SouthPoleTextSection
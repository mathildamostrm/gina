import React from 'react'
import { Container } from '../../global-styles'
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
  } from './terms-conditions.elements'

function TermsSection({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  img,
  headline,
  alt,
  imgStart,
  start,
  descriptionOne,
  descriptionTwo,
  descriptionThree,
  descriptionFour,
  descriptionFive
}) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
        <InfoRow imgStart={imgStart}>
              <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{descriptionOne}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>{descriptionTwo}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>{descriptionThree}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>{descriptionFour}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>{descriptionFive}</Subtitle>
              </TextWrapper>
              <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  )
}

export default TermsSection
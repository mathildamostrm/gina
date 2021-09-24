import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';
import {
  AboutSec,
  AboutRow,
  AboutColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './AboutSection.elements';

function AboutSection({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  descriptionOne,
  descriptionTwo,
  descriptionThree,
  descriptionFour,
  descriptionFive,
  descriptionSix,
  img,
  alt,
  imgStart,
  start
}) {
  return (
    <>
      <AboutSec lightBg={lightBg}>
        <Container>
          <AboutRow imgStart={imgStart}>
            <AboutColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{descriptionOne}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>{descriptionTwo}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>{descriptionThree}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>{descriptionFour}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>{descriptionFive}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>{descriptionSix}</Subtitle>
              </TextWrapper>
            </AboutColumn>
            <AboutColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </AboutColumn>
          </AboutRow>
        </Container>
      </AboutSec>
    </>
  )
}

export default AboutSection
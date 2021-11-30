import React from 'react'
//import { Link } from 'react-router-dom'
import { Container } from '../../global-styles'
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
} from './about-section.elements'
import './about.css'

function AboutSection({
  //primary,
  lightBg,
  topLineOne,
  topLineTwo,
  topLineThree,
  topLineFour,
  topLineFive,
  topLineSix,
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
  descriptionSeven,
  descriptionEight,
  imgOne,
  imgTwo,
  imgThree,
  imgFour,
  imgFive,
  imgSix,
  alt,
  imgStart,
  start
}) {
  return (
    <>
      <AboutSec lightBg={lightBg}>
        <Container>
        <Heading lightText={lightText}>{headline}</Heading>
          <AboutRow imgStart={imgStart}>
            <AboutColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLineOne}</TopLine>
                <Subtitle lightTextDesc={lightTextDesc}>{descriptionOne}</Subtitle>
                </TextWrapper>
            </AboutColumn>
            <AboutColumn>
              <ImgWrapper start={start}>
                <Img src={imgOne} alt={alt} />
              </ImgWrapper>
            </AboutColumn>

            <AboutColumn>
              <ImgWrapper start={start}>
                <Img src={imgTwo} alt={alt} />
              </ImgWrapper>
            </AboutColumn>
            <AboutColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLineTwo}</TopLine>
                <Subtitle lightTextDesc={lightTextDesc}>{descriptionTwo}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>{descriptionThree}</Subtitle>
              </TextWrapper>
            </AboutColumn>

            <AboutColumn>
                <TopLine lightTopLine={lightTopLine}>{topLineThree}</TopLine>
                <Subtitle lightTextDesc={lightTextDesc}>{descriptionFour}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>{descriptionFive}</Subtitle>
                <Subtitle lightTextDesc={lightTextDesc}>{descriptionSix}</Subtitle>
            </AboutColumn>
            <AboutColumn>
              <ImgWrapper start={start}>
                <Img src={imgFour} alt={alt} />
              </ImgWrapper>
            </AboutColumn>

            <AboutColumn>
              <ImgWrapper start={start}>
                <Img src={imgFive} alt={alt} />
              </ImgWrapper>
            </AboutColumn>
            <AboutColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLineFour}</TopLine>
                <Subtitle lightTextDesc={lightTextDesc}>{descriptionSeven}</Subtitle>
                </TextWrapper>
            </AboutColumn>

            <AboutColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLineFive}</TopLine>
                <Subtitle lightTextDesc={lightTextDesc}>{descriptionEight}</Subtitle>
                <TopLine lightTopLine={lightTopLine}>{topLineSix}</TopLine>
                <div>
                  <ul className='list'>
                    <li>2016 Sydney to Cairns on a bicycle (2 700 km)</li>
                    <li>2018 North Cape to Jäckvik solo on skis (60 days)</li>
                    <li>2019 First women to cross Lake Baikal in siberia by foot solo from South to North. 700 km and 14,5 days</li>
                    <li>2019 Norge på langs. Hiked from the southernmost point of Norway to the Northernmost point together with her partner, Stig-Rune and their dog. 2642 km and 102 days</li>
                  </ul>
                </div>
                </TextWrapper>
            </AboutColumn>
            <AboutColumn>
              <ImgWrapper start={start}>
                <Img src={imgSix} alt={alt} />
              </ImgWrapper>
            </AboutColumn>


          </AboutRow>
        </Container>
      </AboutSec>
    </>
  )
}

export default AboutSection
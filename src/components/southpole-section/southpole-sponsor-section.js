import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from '../../global-styles'
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

function SouthPoleSponsorSection({
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
    <>
      <SouthPoleSec lightBg={lightBg}>
        <Container>
          <SouthPoleRow imgStart={imgStart}>
            <SouthPoleColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to={link}>
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
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

export default SouthPoleSponsorSection
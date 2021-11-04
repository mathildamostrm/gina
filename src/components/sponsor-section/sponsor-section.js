import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from '../../global-styles'
import {
  SponsorSec,
  SponsorRow,
  SponsorColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './sponsor-section.elements'

function SponsorSection({
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
      <SponsorSec lightBg={lightBg}>
        <Container>
          <SponsorRow imgStart={imgStart}>
            <SponsorColumn>
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
            </SponsorColumn>
            <SponsorColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </SponsorColumn>
          </SponsorRow>
        </Container>
      </SponsorSec>
    </>
  )
}

export default SponsorSection
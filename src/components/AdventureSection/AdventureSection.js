import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from '../../globalStyles'
import {
  AdventureSec,
  AdventureRow,
  AdventureColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './AdventureSection.elements'

function AdventureSection({
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
      <AdventureSec lightBg={lightBg}>
        <Container>
          <AdventureRow imgStart={imgStart}>
            <AdventureColumn>
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
            </AdventureColumn>
            <AdventureColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </AdventureColumn>
          </AdventureRow>
        </Container>
      </AdventureSec>
    </>
  )
}

export default AdventureSection
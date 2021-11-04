import React from 'react'
import { Container } from '../../global-styles'
import {
    ContactSec,
    ContactRow,
    ContactColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle
} from './contact-section.elements'

function ContactSection({
    lightBg,
    topLineEmail,
    topLinePhone,
    lightTopLine,
    lightText,
    lightTextDesc,
    headlineEmail,
    headlinePhone,
    descriptionEmail,
    descriptionPhone
}) {
    return (
        <>
        <ContactSec lightBg={lightBg}>
        <Container>
          <ContactRow>
            <ContactColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLineEmail}</TopLine>
                <Heading lightText={lightText}>{headlineEmail}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{descriptionEmail}</Subtitle>
              </TextWrapper>
            </ContactColumn>
            <ContactColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLinePhone}</TopLine>
                <Heading lightText={lightText}>{headlinePhone}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{descriptionPhone}</Subtitle>
              </TextWrapper>
            </ContactColumn>
          </ContactRow>
        </Container>
      </ContactSec>
      </>
    )
}

export default ContactSection
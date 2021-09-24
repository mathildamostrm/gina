import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../globalStyles'
import {
  FaFacebook,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa'
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements'
import SouthPoleTeamSection from '../SouthPoleSection/SouthPoleTeamSection'

function Footer() {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Me</FooterLinkTitle>
            <FooterLink to='/'>Contact</FooterLink>
            <FooterLink to='/'>Support</FooterLink>
            <FooterLink to='/'>Destinations</FooterLink>
            <FooterLink to='/'>Sponsorships</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to={{ pathname:'https://www.instagram.com/ginajohansen91' }} target='_blank'>Instagram</FooterLink>
            <FooterLink to={{ pathname:'https://www.facebook.com/ginajohansen91' }} target='_blank'>Facebook</FooterLink>
            <FooterLink to={{ pathname:'https://twitter.com/ginajohansen91' }} target='_blank'>Twitter</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <WebsiteRights>GINA JOHANSEN © 2021</WebsiteRights>
          <SocialIcons>
            <Link to={{ pathname:'https://www.facebook.com/ginajohansen91' }} target='_blank'>
            <SocialIconLink aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            </Link>
            <Link to={{ pathname:'https://www.instagram.com/ginajohansen91' }} target='_blank'>
            <SocialIconLink aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            </Link>
            <Link to={{ pathname:'https://twitter.com/ginajohansen91' }} target='_blank'>
            <SocialIconLink aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            </Link>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
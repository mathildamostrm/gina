import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from '../../global-styles'
import {
  BlogSec,
  BlogRow,
  BlogColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './blog-section.elements';

function BlogSection({
  lightBg,
  topLine,
  lightTopLine,
  img,
  alt,
  imgStart,
  start,
  primary,
  buttonLabel
}) {
  return (
    <>
      <BlogSec lightBg={lightBg}>
        <Container>
          <BlogRow imgStart={imgStart}>
            <BlogColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Link to={{ pathname:'https://www.ginajohansen.com/blog-1' }} target='_blank'>
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </BlogColumn>
            <BlogColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </BlogColumn>
          </BlogRow>
        </Container>
      </BlogSec>
    </>
  )
}

export default BlogSection
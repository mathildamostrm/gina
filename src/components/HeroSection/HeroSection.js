import React, { useState } from 'react'
//import { FaItalic } from 'react-icons/fa'
import Video from '../../videos/gina-move.mp4'
//import { Button } from '../ButtonElements'
import { 
    HeroContainer,
    HeroBackground,
    VideoBackground,
    HeroContent,
    HeroH1,
    HeroP,
  /*  HeroBtnWrapper,
    ArrowForward,
    ArrowRight */
 } from './HeroSection.elements'

const HeroSection = () => {
    /*const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }*/

    return (
        <HeroContainer id='home'>
         <HeroBackground>
             <VideoBackground autoPlay loop muted src={Video} type='video/mp4' />
         </HeroBackground> 
         <HeroContent>
            {/*<HeroH1>GINA JOHANSEN</HeroH1>*/}
             <HeroH1>ESCAPE THE ORDINARY</HeroH1>
             <HeroP>A Swedish girl living at top of Europe, above the artic circle. Running under the midnight sun & skiing while the Northern lights dancing on the sky.</HeroP>
             <HeroP><i>A pechant to rocky mountains, wilderness and the arctic.</i></HeroP>
             <HeroH1>I DREAM BIG</HeroH1>
          {/*   <HeroBtnWrapper>
                 <Button 
                    to="signin" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >
                     Get started {hover ? <ArrowForward /> : <ArrowRight />}
                 </Button>
             </HeroBtnWrapper> */}
         </HeroContent>  
        </HeroContainer>
    )
}

export default HeroSection
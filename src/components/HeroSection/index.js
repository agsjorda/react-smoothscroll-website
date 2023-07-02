import React, { useState } from 'react';
import MatrixVideo from '../../videos/video.mp4';
import { Button } from '../ButtonElements';

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={MatrixVideo} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome To The MetaVerse</HeroH1>
        <HeroP>Do You want to take the Red Pill or the Blue Pill?</HeroP>
        <HeroBtnWrapper>
          <Button
            to='signup'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            // fontBig='true'
            // big='true'
          >
            Take The Leap {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

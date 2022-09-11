import React, {useState} from 'react';
import { Button } from '../../ButtonElements';
import Video from '../../../videos/video.mp4';
import { 
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './SliderElements';
import { Link } from "react-router-dom";




 
const Slider = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
      <HeroContainer>
<HeroBg>
<VideoBg autoPlay loop muted src={Video} type='video/mp4' />
</HeroBg>
<HeroContent>
 <HeroH1>Welcome To <br /> Mainlanklan Entertainment</HeroH1>
    <HeroBtnWrapper>
        <Button onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
           <Link to='/about'> Enter Site { hover ? <ArrowForward /> : <ArrowRight />}</Link>
        </Button>

    </HeroBtnWrapper>
</HeroContent>
</HeroContainer>
);

    };


export default Slider;
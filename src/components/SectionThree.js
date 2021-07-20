import React from 'react';
import { Section } from './globals/Section';
import {H1} from './globals/Heading';
import {Button,ButtonText} from './globals/Button';
import {ImgWrapper,WrapImages,RoWrapper,Div} from './SectionThreestyles';
import img1 from './images/mobile/image-deep-earth.jpg';
import img2 from './images/mobile/image-night-arcade.jpg';
import img3 from './images/mobile/image-soccer-team.jpg';
import img4 from './images/mobile/image-grid.jpg';
import img5 from './images/mobile/image-from-above.jpg';
import img6 from './images/mobile/image-pocket-borealis.jpg';
import img7 from './images/mobile/image-curiosity.jpg';
import img8 from './images/mobile/image-fisheye.jpg';
import imgd1 from './images/desktop/image-deep-earth.jpg';
import imgd2 from './images/desktop/image-night-arcade.jpg';
import imgd3 from './images/desktop/image-soccer-team.jpg';
import imgd4 from './images/desktop/image-grid.jpg';
import imgd5 from './images/desktop/image-from-above.jpg';
import imgd6 from './images/desktop/image-pocket-borealis.jpg';
import imgd7 from './images/desktop/image-curiosity.jpg';
import imgd8 from './images/desktop/image-fisheye.jpg';


function SectionThree() {
    return (
        <Section className="section three">
            <RoWrapper>
                <H1>our creations</H1>
                <Button top>
                    <ButtonText>see all</ButtonText>
                </Button>
            </RoWrapper>
            <WrapImages>
                <ImgWrapper image1={img1} image2={imgd1}>
                    <Div><H1 white wrap><span>deep</span><span>earth</span></H1></Div>
                </ImgWrapper>
                <ImgWrapper image1={img2} image2={imgd2}>
                    <Div><H1 white wrap><span>night</span><span>arcade</span></H1></Div>
                </ImgWrapper>
                <ImgWrapper image1={img3} image2={imgd3}>
                    <Div><H1 white wrap><span>soccer</span><span>team vr</span></H1></Div>
                </ImgWrapper>
                <ImgWrapper image1={img4} image2={imgd4}>
                    <Div><H1 white wrap><span>the</span><span>grid</span></H1></Div>
                </ImgWrapper>
                <ImgWrapper image1={img5} image2={imgd5}>
                    <Div><H1 white wrap><span>from up</span><span>above vr</span></H1></Div>
                </ImgWrapper>
                <ImgWrapper image1={img6} image2={imgd6}>
                    <Div><H1 white wrap><span>pocket</span><span>borealis</span></H1></Div>
                </ImgWrapper>
                <ImgWrapper image1={img7} image2={imgd7}>
                    <Div><H1 white wrap><span>the</span><span>curiosity</span></H1></Div>
                </ImgWrapper>
                <ImgWrapper image1={img8} image2={imgd8}>
                    <Div><H1 white wrap><span>make it</span><span>finisheye</span></H1></Div>
                </ImgWrapper>
            </WrapImages>
            <Button bottom>
                <ButtonText>see all</ButtonText>
            </Button>
        </Section>
    )
}

export default SectionThree

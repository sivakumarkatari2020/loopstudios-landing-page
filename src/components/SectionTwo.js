import React from 'react';
import { Section } from './globals/Section';
import {H1} from './globals/Heading';
import {Img,TextWrapper,Paragraph,GridWrapper} from './SectionTwoStyles';
import InteractiveImg from './images/mobile/image-interactive.jpg';
import InteractiveImgDesktop from './images/desktop/image-interactive.jpg';

function SectionTwo() {
    return (
        <Section className="section">
            <GridWrapper>
                <Img mobile src={InteractiveImg} alt="Interactive jpg"></Img>
                <Img src={InteractiveImgDesktop} alt="Interactive jpg desktop"></Img>
                <TextWrapper>
                    <H1 card><span>The leader in</span><span>interactive vr</span></H1>
                    <Paragraph card> Founded in 2011, Loopstudios has been producing world-class virtual reality 
                    projects for some of the best companies around the globe. Our award-winning 
                    creations have transformed businesses through digital experiences that bind 
                    to their brand.
                    </Paragraph>
                </TextWrapper>
            </GridWrapper>
        </Section>
    )
}

export default SectionTwo

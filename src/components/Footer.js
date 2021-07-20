import React from 'react'
import { Section } from './globals/Section';
import {ContentWrapper,Link,SocialMedia,Photo,Img} from './FooterStyles';
import { Paragraph } from './SectionTwoStyles';
import Logo from './images/logo.svg';
import Facebook from './images/icon-facebook.svg';
import Twitter from './images/icon-twitter.svg';
import Pinterest from './images/icon-pinterest.svg';
import Instagram from './images/icon-instagram.svg';


function Footer() {
    return (
        <Section dark className="footer">
            <ContentWrapper>
                <ContentWrapper rowColumn>
                    <ContentWrapper columnRow>
                        <img src={Logo} alt="logo"></img>
                        <ContentWrapper rowColumn>
                            <Link>About</Link>
                            <Link>Careers</Link>
                            <Link>Events</Link>
                            <Link>Products</Link>
                            <Link>Support</Link>
                        </ContentWrapper>
                    </ContentWrapper>
                    <ContentWrapper columnRow right>
                        <SocialMedia right>
                            <Photo><Img src={Facebook} alt="facebook"></Img></Photo>
                            <Photo><Img src={Twitter} alt="twitter"></Img></Photo>
                            <Photo><Img src={Pinterest} alt="pinterest"></Img></Photo>
                            <Photo><Img src={Instagram} alt="instagram"></Img></Photo>
                        </SocialMedia>
                        <Paragraph light>© 2021 Loopstudios. All rights reserved.</Paragraph>
                    </ContentWrapper>
                </ContentWrapper>
            </ContentWrapper>
        </Section>
    )
}

export default Footer

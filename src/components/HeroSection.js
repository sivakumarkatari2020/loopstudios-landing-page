import React,{useState} from 'react'
import {Section} from './globals/Section';
import {H1} from './globals/Heading';
import {Wrapper,Navbar,Img,NavPanel,NavLink,MobileNav,NavPanelMobile} from './HeroSectionStyles';
import Logo from './images/logo.svg';
import Hamburger from './images/icon-hamburger.svg';
import Cross from './images/icon-close.svg';

function HeroSection() {
    const [isOpen,openMenu] = useState(false);

    return (
        <Section backImg className="header">
            <Navbar>
                <img src={Logo} alt="Logo"></img>
                <Img src={Hamburger} alt="Open menu" onClick={()=>{openMenu(true)}}></Img>
                <NavPanel>
                    <NavLink href="#">About</NavLink>
                    <NavLink href="#">Careers</NavLink>
                    <NavLink href="#">Events</NavLink>
                    <NavLink href="#">Products</NavLink>
                    <NavLink href="#">Support</NavLink>
                </NavPanel>
            </Navbar>
            {
                isOpen ? 
                <MobileNav>
                    <Navbar>
                        <img src={Logo} alt="Logo"></img>
                        <img src={Cross} alt="close" onClick={()=>{openMenu(false)}}></img>
                    </Navbar>
                    <NavPanelMobile>
                        <NavLink href="#" mobile>About</NavLink>
                        <NavLink href="#" mobile>Careers</NavLink>
                        <NavLink href="#" mobile>Events</NavLink>
                        <NavLink href="#" mobile>Products</NavLink>
                        <NavLink href="#" mobile>Support</NavLink>
                    </NavPanelMobile>
                </MobileNav> : ''
                }
            <Wrapper>
                <H1 big>
                    <span>immersive</span>
                    <span>experiences</span>
                    <span>that</span>
                    <span>deliver</span>
                </H1>
            </Wrapper>
        </Section>
    )
}

export default HeroSection

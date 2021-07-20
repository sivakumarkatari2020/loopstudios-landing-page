import styled, { css } from 'styled-components';
import HeroImgMobile from '../images/mobile/image-hero.jpg';
import HeroImgDesktop from '../images/desktop/image-hero.jpg';

export const Section = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 0;
    margin: 0;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${props => props.backImg && css`
        background: url(${HeroImgDesktop}) no-repeat center;
        background-size: cover;

        @media (max-width : 450px){
            background-image: url(${HeroImgMobile});
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
        }
    `}

    ${props => props.dark && css`
        background-color: #000000;
        color: #FFFFFF;

        @media (min-width : 450px){
            min-height: 300px;
        }
    `}

`
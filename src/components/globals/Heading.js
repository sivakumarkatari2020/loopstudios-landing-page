import styled, { css } from "styled-components";

export const H1 = styled.h1`
    padding: 0;
    margin: 0;
    font-size: 2rem;
    color: #000000;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 100%;
    display: flex;
    flex-direction : column;
    align-items: center;

    ${props => props.white && css`
        color: inherit;

        ${props => props.wrap && css`
            align-items: flex-start;
            padding: 1rem;

            @media (min-width : 450px){
                position: relative;
                top: 75%;
                left: 5%;
                font-size: 1.5rem;
                color: inherit;
            }
        `}
    
    `}

    ${props => props.big && css`
        color: #FFFFFF;
        font-size: 2.8rem;
        align-items: flex-start;
    `}

    ${props => props.card && css`
        @media (min-width : 450px){
            width: 80%;
            display: flex;
            flex-direction : column;
            align-items: flex-start;
        }
    `}
`
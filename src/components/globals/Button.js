import styled, { css } from 'styled-components';

export const Button = styled.div`
    margin: 2rem 0;
    width : 150px;
    height: 40px;
    border : 2px solid #000000;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        background-color: #000000;
        color: #FFFFFF;
    }

    ${props => props.bottom && css`
        @media (min-width : 450px){
            display: none;
        }
    `}

    ${props => props.top && css`
        @media (max-width : 450px){
            display: none;
        }
    `}
`

export const ButtonText = styled.p`
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-family: 'Alata',sans-serif;
`
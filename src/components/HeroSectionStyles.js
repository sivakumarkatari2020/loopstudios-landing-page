import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    width: 400px;
    height: 200px;
    padding: 1rem;
    border: 3px solid #FFFFFF;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (min-width : 450px){
        position: absolute;
        top: 50%;
        left: 10%;
    }

    @media (max-width : 450px){
        width : 300px;
        height: 200px;
        padding: 1rem;
        justify-content: center;
    }
`

export const Navbar = styled.div`
    width: 80%;
    max-height: 70px;
    padding: 2rem 0;
    margin: 0;
    position: absolute;
    top : 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Img = styled.img`
    @media (min-width : 450px){
        display: none;
    }
`

export const NavPanel = styled.div`
    padding: 0;
    margin: 0;
    width: 60%;
    max-width: 500px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width : 450px){
        display: none;
    }
`

export const NavPanelMobile = styled.div`
    width: 80%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const NavLink = styled.a`
    display: block;
    width: 20%;
    height: 100%;
    font-weight: 500;
    font-family: 'Alata',sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #ffffff;
    cursor: pointer;

    &:hover{
        &::after{
            content: " ";
            position: absolute;
            top: 70%;
            width: 30px;
            height: 3px;
            border-radius: 5px;
            background-color: #ffffff;
        }

        @media (max-width : 450px){
            &::after{
                display: none;
            }
        }
    }

    ${props => props.mobile && css`
        width: 100%;
        height: 20%;
        text-transform: uppercase;
        text-decoration : none;
        font-size: 1.5rem;
        font-weight: 300;
        color : #ffffff;
        justify-content: flex-start;
        font-family: 'Josefin Sans',sans-serif;

        &:hover{
            font-style: italic;
        }
    `}
`

export const MobileNav = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Josefin Sans',sans-serif;

    @media (min-width : 450px){
        display: none;
    }
`
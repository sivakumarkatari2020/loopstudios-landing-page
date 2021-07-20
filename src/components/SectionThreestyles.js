import styled from 'styled-components';

export const ImgWrapper = styled.div`
    width: 20%;
    height: 400px;
    margin: 2.5%;
    display: inline-block;
    background-image: url(${props => props.image2 ? props.image2 : ''});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-shadow: inset 0 10px 100px rgba(0,0,0);
    justify-content : center;
    align-items : center;

    @media (max-width : 450px){
        padding: 0;
        width: 90%;
        height: 150px;
        margin: 1rem 0;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        background-image: url(${props => props.image1 ? props.image1 : ''});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        box-shadow: inset 10px 10px 100px rgba(0,0,0);
    }
`

export const WrapImages = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;

    @media (max-width : 450px){
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const RoWrapper = styled.div`
    width: 80%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width : 450px){
        justify-content: center;
    }
`

export const Div = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0);
    color: #FFFFFF;
    transition: .5s;

    &:hover{
        background-color: rgba(255,255,255,0.5);
        color: #000;
        font-weight: 700;
    }
`



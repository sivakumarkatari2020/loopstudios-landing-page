import styled,{css} from 'styled-components';

export const Img = styled.img`
    width: 60%;
    max-width: 500px;
    height: 300px;
    display: none;

    @media (min-width : 450px){
        display: block;

        ${props => props.mobile && css`
            display: none;
        `}
    }

    ${props => props.mobile && css`
        display: none;

        @media (max-width : 450px){
            display: block;
            width: 90%;
            height: 250px;
        }
    `}
`

export const TextWrapper = styled.div`
    @media (max-width : 450px){
        width: 90%;
        padding: 2rem 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (min-width : 450px){
        width: 60%;
        max-width: 500px;
        height: 300px;
        background-color: #FFFFFF;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1;
        position: relative;
        top : 40%;
        left: -10%;
    }
`

export const Paragraph = styled.p`
    width: 90%;
    font-size: 1rem;
    line-height: 150%;
    text-align : center;
    font-family: 'Alata',sans-serif;
    color : hsl(0, 0%, 55%);

    ${props => props.card && css`
        @media (min-width : 450px){
            width: 90%;
            max-width: 400px;
            text-align : left;
        }
    `}

    ${props => props.light && css`
        width: 100%;
        color: #FFFFFF;
        font-size: 0.7rem;

        @media (min-width : 450px){
            display: flex;
            justify-content: flex-end;
        }
    `}
`

export const GridWrapper = styled.div`
    padding : 0;
    margin : 0;
    width: 100%;
    min-height: 100%;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width : 450px){
        width: 80%;
        max-width: 900px;
        height: 500px;
        display: flex;
        flex-wrap : wrap;
        flex-direction: column;
        align-items:center;
        justify-content: flex-start;
        overflow: hidden;
    }
`
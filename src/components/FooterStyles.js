import styled,{css} from "styled-components";

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    
    @media (min-height : 450px){
        width: 80%;
        padding: 0;
        margin: 0;
        justify-content: space-between;
    }
    
    @media (max-width : 450px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    ${props => props.rowColumn && css`
        @media (min-width : 450px){
            width: 100%;
            flex-direction: row;
            justify-content: space-between;
        }

        @media (max-width : 450px){
            width: 100%;
            margin-top: 2rem;
            flex-direction: column;
            justify-content: center;
        }
    `}

    ${props => props.columnRow && css`
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        ${props => props.right && css`
            width: 100%;
            align-items: flex-end;
        `}

        @media (max-width : 450px){
            margin-top: 2rem;
            flex-direction: column;
            justify-content: center;
        }
    `}
`

export const Link = styled.a`
    display: block;
    width: 50px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align : center;
    font-size: 1.2rem;
    cursor: pointer;
    font-family: 'Alata',sans-serif;

    &:hover{
        &::after{
            content: " ";
            position: absolute;
            margin-top: 3rem;
            width: 30px;
            height: 3px;
            border-radius: 5px;
            background-color: #ffffff;
        }
    }
    
    @media (min-width : 450px){
        margin: 1rem 0.5rem;
    }
`

export const SocialMedia = styled.div`
    width: 200px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
export const Photo = styled.div`
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;

    &:hover{
        &::after{
            content: " ";
            position: absolute;
            margin-top: 3rem;
            width: 20px;
            height: 3px;
            border-radius: 5px;
            background-color: #ffffff;
        }
    }
`

export const Img = styled.img`
    cursor : pointer;
`









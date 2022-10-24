import styled from "styled-components";


export const Section = styled.section `
    height: 89.8vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media(max-width: 650px) {
        flex-direction: column;
        justify-content: center;
        
    }
`
export const DivInfos = styled.div `

   @media(max-width: 650px) {
        order: 1;
    }

`
export const P = styled.p `
    display: flex;
    flex-direction: column;
    font-size: 55px;
    color: #F2F2F2;
    font-weight: 500;
    margin-bottom: 40px;

     span{
        margin-bottom: 10px;
     }

     @media(max-width: 1080px) {
        font-size: 40px;
    }

    @media(max-width: 770px) {
        font-size: 30px;
    }
`

export const SpanName = styled.span `
    color: #6CDFE1;
    font-weight: 700;
   
    
`

export const Btn = styled.a `
    background-image: linear-gradient(to right, #0FC2C0, #0CABA8, #008F8C);
    padding: 15px 30px;
    border-radius: 30px;
    text-decoration: none;
    color: #F2F2F2;
`

export const FotoPerfil = styled.img `
    object-fit: cover;
    @media(max-width: 1080px) {
        width: 300px;
    }

    @media(max-width: 650px) {
        order: 0;
        margin-bottom: 40px;
    }

`

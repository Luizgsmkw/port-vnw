import styled from "styled-components";

export const ContainerCertificados = styled.section `
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
   justify-content: center;
`

export const DivCertificados = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-left: 30px;

`

export const ImgCertificados = styled.img `
    width: 360px;
    height: 245px;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`
export const P = styled.p `
color: white;
font-size: 15px;
margin-top: 5px;
margin-bottom: 30px;
`
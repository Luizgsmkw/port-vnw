import styled from "styled-components";

export const Certificados = styled.section `
display: none;
`

export const ContainerCertificados = styled.div `
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

@media(max-width: 500px) {
    margin-left: 0px;
}

`

export const ImgCertificados = styled.img `
    width: 360px;
    height: 245px;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

    @media(max-width: 370px) {
        width: 340px;
}
`
export const P = styled.p `
color: white;
font-size: 15px;
margin-top: 5px;
margin-bottom: 30px;
`

export const ImgCertificadosMobile = styled.img `
width: 800px;
height: 530px;


@media(max-width: 860px) {
    width: 600px;
    height: 350px;
}

@media(max-width: 680px) {
    width: 450px;
    height: 350px;
}

@media(max-width: 480px) {
    width: 340px;
    height: 200px;
    object-fit: cover;
}
`
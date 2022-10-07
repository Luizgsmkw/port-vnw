import styled from "styled-components";

export const Section = styled.section`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

export const DivTitle = styled.div `
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 1100px;
    margin-bottom: 10px;
    @media(max-width: 1140px) {
        width: 800px;
    }

    @media(max-width: 840px) {
        width: 600px;
    }
    @media(max-width: 640px) {
        width: 400px;
    }
    @media(max-width: 415px) {
        width: 350px;
    }
`

export const H2 = styled.h2`
  color: #6cdfe1;
  font-size: 40px;
  font-weight: 600px;
  white-space: 500px;
  @media(max-width: 640px) {
    font-size: 30px;
    }
`;

export const Linha = styled.div `
    background-image: linear-gradient(to right, #0FC2C0, #0CABA8, #008F8C);
    height: 5px;
    width: 30%;
    margin-top: 2.5px;
    margin-left: 30px;
    border-radius: 5px;
    @media(max-width: 640px) {
        width: 50%;
    }
`

export const DivAbout = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 300px;
    @media(max-width: 1140px) {
        height: 350px;
    }
    @media(max-width: 840px) {
        height: 400px;
    } 
    @media(max-width: 840px) {
        height: 500px;
    }
`

export const P = styled.p `
    color: #F2F2F2;
    font-size: 20px;
    text-align: justify;
    width: 1100px;
    line-height: 35px;
    @media(max-width: 1140px) {
        width: 800px;
        font-size: 18px;
    }

    @media(max-width: 840px) {
        width: 600px;
        font-size: 16px;
    }

    @media(max-width: 640px) {
        width: 400px;
        font-size: 15px;
    }

    @media(max-width: 415px) {
        width: 350px;
        font-size: 13px;
    }
`




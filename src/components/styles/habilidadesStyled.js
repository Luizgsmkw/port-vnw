import styled from "styled-components";

export const Habilidadess = styled.section `
display: none;
`

export const Section = styled.section`
  min-height: 89.5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

export const H2 = styled.h2 `
    color: #6CDFE1;
    font-size: 55px;
    margin: 10px 0 ;
`

export const DivTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const CardTechnologies = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 2px solid #6CDFE1;
    width: 300px;
    height: 150px;
    border-radius: 10px;
    margin: 10px;
        img{
            width: 98px;
            filter: invert(100%) sepia(56%) saturate(2837%) hue-rotate(148deg) brightness(100%) contrast(76%);
        }
`;

export const H3 = styled.h3 `
    color: #F2F2F2;
    font-size: 23px;
`

export const IconTechnologies = styled.p `
    font-size: 80px;
    margin-bottom: -15px;
    color: #6CDFE1;
`

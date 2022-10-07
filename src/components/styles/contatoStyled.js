import styled from "styled-components";

export const Contatos = styled.div `
    display: none;

` 
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  margin: auto;
`;

export const Title = styled.h1`
  color: white;
`;


export const Erro = styled.p `
    color: #BF0413;
    font-size: 13px;
    font-weight: 600;
    padding-top: 2px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
`;

export const Input = styled.input `
    width: 600px;
    padding: 8px;
    border: none;
    border-radius: 4px;
    @media(max-width: 610px) {
        width: 400px;
    }

    @media(max-width: 410px) {
        width: 300px;
    }
`

export const TextArea = styled.textarea `
  width: 600px;
  height: 130px;
  padding: 8px;
  border-radius: 4px;
  border: none; 
  @media(max-width: 610px) {
        width: 400px;
    }

    @media(max-width: 410px) {
        width: 300px;
    }
`
export const Button = styled.input `
    width: 612px;
    padding: 8px;
    border: none; 
    border-radius: 4px;
    background-image: linear-gradient(to right, #0FC2C0, #0CABA8, #008F8C, #015958, #023535);
    cursor: pointer;
    color: white;
    @media(max-width: 610px) {
        width: 400px;
    }

    @media(max-width: 410px) {
        width: 300px;
    }
`
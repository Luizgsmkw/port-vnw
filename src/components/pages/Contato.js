import React, { useState } from "react";
import * as S from "../styles/contatoStyled";
import emailJs from "@emailjs/browser";
import emailAnimation from '../../assets/lotties/83358-contact-green.json'
import Lottie from 'react-lottie'
const Contato = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: emailAnimation
}
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    const erroForm = document.getElementById("erroForm");
    e.preventDefault();
    if (name === "" || name.length < 3 || email === "" || message === "" || message.length < 14) {
      erroForm.innerText = "*Fomulário invalido";
      return
    } else{
      erroForm.innerText = "";
    }
    const templatePrams = {
      from_name: name,
      message: message,
      email: email,
    };
    emailJs
      .send(
        "service_x5dnfzd",
        "template_3umukqe",
        templatePrams,
        "OEj--Jdz-y1pL5uPF"
      )
      .then(
        (response) => {
          console.log("email enviado", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log(`Erro ${err}`);
        }
      );
  };

  function validadorEmail(email) {
    const emailValidador =
      /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  
    return emailValidador.test(email);
  }

  setTimeout(() => {
    const container = document.getElementById("container");
    const animationEmail = document.getElementById("animationEmail");
    container.style.display= 'initial'
    animationEmail.style.display= 'none'

  }, 3000)

  return (
    <>
    <div id='animationEmail'>
        <Lottie options={defaultOptions} height={400} width={400}/>

    </div>
    <S.Contatos id="container">
    <S.Container>
      <S.Title>Contato</S.Title>
      <S.Form onSubmit={sendEmail}>
        <div>
          <S.Input
            type="text"
            id="name"
            placeholder="Digite seu nome"
            onChange={(e) => {
              setName(e.target.value)
              const erroName = document.getElementById("erroName");
              const validName = document.getElementById("name")
              if (name.length < 3 || name === '') {
                erroName.innerText = "*Mínimo de caracteres é 4";
                validName.style.border = '1.8px solid #BF0413'
              } else {
                erroName.innerText = "";
                validName.style.border = '1.8px solid #00E600'
              }
            }}
            value={name}
          />
          <S.Erro id="erroName"></S.Erro>
        </div>
        <div>
          <S.Input
            type="email"
            id="email"
            placeholder="Digite seu email"
            onChange={(e) => {
              setEmail(e.target.value)
              const erroEmail = document.getElementById("erroEmail");
              const validEmail = document.getElementById("email")
              if (validadorEmail(validEmail.value) !== true) {
                erroEmail.innerText = "Por favor insira um endereço de email valido";
                validEmail.style.border = '1.8px solid #BF0413'
              } else {
                erroEmail.innerText = "";
                validEmail.style.border = '1.8px solid #00E600'
              }
            }}
            value={email}
          />
          <S.Erro id="erroEmail"></S.Erro>
        </div>
        <div>
          <S.TextArea
            placeholder="Digite sua mensagem"
            id="message"
            onChange={(e) => {
              setMessage(e.target.value)
              const erroMessage = document.getElementById("erroMessage");
              const validMessage = document.getElementById("message")
              if (message.length < 14 || message === '') {
                erroMessage.innerText = "*Mínimo de caracteres é 15";
                validMessage.style.border = '1.8px solid #BF0413'
              } else {
                erroMessage.innerText = "";
                validMessage.style.border = '1.8px solid #00E600'
              }
            }}
            value={message}
          />
          <S.Erro id="erroMessage"></S.Erro>
        </div>
        <S.Button type="submit" value="Enviar" />
        <S.Erro id="erroForm"></S.Erro>
      </S.Form>
    </S.Container>
    </S.Contatos>
    </>
  );
};

export default Contato;

import React from "react";
import * as S from "../styles/sobreStyled";
import "./sobreCss.css";
import { AiFillLinkedin, AiFillInstagram, AiOutlineGithub } from "react-icons/ai";
const Sobre = () => {
  const Linkedin = <AiFillLinkedin />;
  const Instagram = <AiFillInstagram/>;
  const GitHub = <AiOutlineGithub/>

  return (
    <S.Section>
      <S.DivTitle>
        <S.H2>Sobre</S.H2>
        <S.Linha></S.Linha>
      </S.DivTitle>
      <S.DivAbout>
        <S.P>
          Me chamo Luiz e no momento estou em transição de carreira para a área
          de Desenvolvimento Full Stack, sou graduado em História. Sempre me
          destaquei por ser um profissional apaixonado por resolução de
          problemas e inovações. Eu adoro trabalhar em equipe e sempre busco
          otimizar processos para tornar a jornada de trabalho mais ágil,
          compreendendo a particularidade de cada pessoa e com foco no
          resultado.
        </S.P>
        <S.P>
          Nesses últimos meses tive a oportunidade de atuar em projetos,
          utilizando a metodologia Devops no bootcamp da “SoulCode Academy”. Por
          meio dela me aperfeiçoei em lógica de programação, HTML5, CSS3,
          JavaScript, TypeScript, Angular, Java, Spring Boot, MySQL, Firebase,
          Bootstrap e Git/GitHub. Também faço parte da Escola de Tecnologia “Vai
          na Web”, com foco no Desenvolvimento Web (JavaScript, HTML5, CSS3,
          React e Jamstack).
        </S.P>
      </S.DivAbout>
      <div className="container">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <div className="icon">
                <i className="fa fa-linkedin-square" aria-hidden="true">
                  {Linkedin}
                </i>
              </div>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <h3>
                <a
                  href="https://www.linkedin.com/in/luizmartinss/"
                  target="_blank"
                >
                  _luizmartins
                </a>
              </h3>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <div className="icon">
                <i className="fa fa-twitter-square" aria-hidden="true">{Instagram}</i>
              </div>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <h3>
                <a href="https://www.instagram.com/luizkw_01/" target="_blank">
                  @luizkw_01
                </a>
              </h3>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <div className="icon">
                <i className="fa fa-github-square" aria-hidden="true">{GitHub}</i>
              </div>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <h3>
                <a href="https://github.com/Luizgsmkw" target="_blank">
                Luizgsmkw
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </S.Section>
  );
};

export default Sobre;

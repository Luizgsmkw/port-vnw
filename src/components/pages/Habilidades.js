import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiReact,
  DiAngularSimple,
  DiJsBadge,
  DiBootstrap,
  DiGithub,
} from "react-icons/di";
import Ts from "../img/icons8-typescript-100.png";
import * as S from "../styles/habilidadesStyled";
import HabilidadesAnimation from "../../assets/lotties/Habilidades.json";

import Lottie from "react-lottie";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "javascript", name: "JAVASCRIPT", icon: <DiJsBadge /> },
  {
    id: "typescript",
    name: "TYPESCRIPT",
    icon: <img src={Ts} alt="Icon ts" />,
  },
  { id: "react", name: "REACT", icon: <DiReact /> },
  { id: "angular", name: "ANGULAR", icon: <DiAngularSimple /> },
  { id: "sass", name: "SASS", icon: <DiSass /> },
  { id: "bootstrap", name: "BOOTSTRAP", icon: <DiBootstrap /> },
  { id: "github", name: "GITHUB", icon: <DiGithub /> },
];
const Habilidades = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: HabilidadesAnimation,
  };

  setTimeout(() => {
    const container = document.getElementById("container");
    const animationHabilidades = document.getElementById("animationHabilidades");
    container.style.display = "initial";
    animationHabilidades.style.display = "none";
  }, 3000);

  return (
    <>
    <div id='animationHabilidades'>
        <Lottie options={defaultOptions} height={400} width={400}/>
    </div>
    <S.Habilidadess id="container">
    <S.Section>
      <S.DivTechnologies>
        {technologies.map((tech) => (
          <S.CardTechnologies id={tech.id} key={tech.id}>
            <S.IconTechnologies>{tech.icon}</S.IconTechnologies>
            <S.H3>{tech.name}</S.H3>
          </S.CardTechnologies>
        ))}
      </S.DivTechnologies>
    </S.Section>
    </S.Habilidadess>
    </>
  );
};

export default Habilidades;

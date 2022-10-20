import React from "react";
import * as S from "../styles/homeStyled";
import FotoPerfil from "../img/fotoPerfil.png";
import curriculo from "../../assets/curriculo/Luiz-Martins.pdf";

const Home = () => {

  return (
      <S.Section>
        <S.DivInfos>
          <S.P>
            <span>Oi, eu sou</span>
            <S.SpanName>Luiz Martins.</S.SpanName>
            <span>Desenvolvedor Front-end</span>
          </S.P>
          <S.Btn
            href={curriculo}
            download="Luiz-Martins.pdf"
            type="application/pdf"
          >
            Download Currículo
          </S.Btn>
        </S.DivInfos>
       
          <S.FotoPerfil src={FotoPerfil} alt="Foto de perfil" />
      
      </S.Section>
  );

};

export default Home;

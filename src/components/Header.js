import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/img/logo-removebg-preview.png";
import * as S from "./styles/headerStyled";
import "./headerStyle.css";
const Header = () => {
  const [open, setOpen] = useState(false);
  const Toggle = () => {
    setOpen(!open);
  };
  return (
    <S.Header>
      <Link to="/">
        <S.Logo src={Logo} alt="Logo da marca" />
      </Link>
      <S.NavDesktop>
        <S.Ul>
          <li>
            <S.LinkHeader to="/sobre">Sobre</S.LinkHeader>
          </li>
          <li>
            <S.LinkHeader to="/habilidades">Habilidades</S.LinkHeader>
          </li>
          <li>
            <S.LinkHeader to="/projetos">Projetos</S.LinkHeader>
          </li>
          <li>
            <S.LinkHeader to="/certificados">Certificados</S.LinkHeader>
          </li>
          <li>
            <S.LinkHeader to="/contato">Contato</S.LinkHeader>
          </li>
        </S.Ul>
      </S.NavDesktop>
      <S.NavMobile>
        <div
          className={open ? "icon iconActive" : "icon"}
          onClick={() => {
            Toggle();
          }}
        >
          <div className="hamburguer hamburguerIcon"></div>
        </div>
        <div className={open ? "menu menuOpen" : "menu menuClose"}>
          <div className="list">
            <ul className="listItems">
              <li>
                <S.LinkHeaderMobile to="/sobre">Sobre</S.LinkHeaderMobile>
              </li>
              <li>
                <S.LinkHeaderMobile to="/habilidades">
                  Habilidades
                </S.LinkHeaderMobile>
              </li>
              <li>
                <S.LinkHeaderMobile to="/projetos">Projetos</S.LinkHeaderMobile>
              </li>
              <li>
                <S.LinkHeaderMobile to="/certificados">
                  Certificados
                </S.LinkHeaderMobile>
              </li>
              <li>
                <S.LinkHeaderMobile to="/contato">Contato</S.LinkHeaderMobile>
              </li>
            </ul>
          </div>
        </div>
      </S.NavMobile>
    </S.Header>
  );
};

export default Header;

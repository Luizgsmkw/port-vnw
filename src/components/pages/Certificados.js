import React, { useState } from "react";
import * as S from "../styles/certificadosStyled";
import Modal from "react-modal";
import certificadoSoulCode from "../img/certificadoSOulCode.png";
import certificadoHTML1 from "../img/certificadoHTML1.jpg";
import certificadoHTML2 from "../img/certificadoHTML2.jpg";
import certificadoHTML3 from "../img/certificadoHTML3.jpg";
import certificadoLogicaProgramacao from "../img/certificadoLogicaProgramacao.jpg";

const Certificados = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);

  const HandleOpenModal = () => {
    return setModalOpen(true);
  };

  const HandleOpenModal2 = () => {
    return setModalOpen2(true);
  };


  const HandleCloseModal = () => {
    setModalOpen(false);
  };

  const HandleCloseModal2 = () => {
    setModalOpen2(false);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <S.ContainerCertificados>
      <S.DivCertificados>
        <button
          onClick={() => {
            HandleOpenModal();
          }}
        >
          <S.ImgCertificados
            id="1"
            src={certificadoSoulCode}
            alt="Certificado do curso da Soul Code"
          />
        </button>
        <Modal
          isOpen={modalOpen}
          onRequestClose={HandleCloseModal}
          style={customStyles}
        >
          <img
            style={{ width: "800px", height: "530px" }}
            src={certificadoSoulCode}
            alt=""
          />
        </Modal>
        <S.P>Curso Java Full Stack - SoulCode Academy</S.P>
      </S.DivCertificados>
      <S.DivCertificados>
        <button
          onClick={() => {
            HandleOpenModal2();
          }}
        >
          <S.ImgCertificados
            id="2"
            src={certificadoHTML1}
            alt="Certificado do módulo 1 Cruso em Vídeo HTML e CSS"
          />
        </button>
        <Modal
          isOpen={modalOpen2}
          onRequestClose={HandleCloseModal2}
          style={customStyles}
        >
          <img
            style={{ width: "800px", height: "530px" }}
            src={certificadoHTML1}
            alt=""
          />
        </Modal>
        <S.P>HTML5 E CSS3: MÓDULO 1 - Curso em Vídeo</S.P>
      </S.DivCertificados>
      <S.DivCertificados>
        <S.ImgCertificados
          src={certificadoHTML2}
          alt="Certificado do módulo 2 Cruso em Vídeo HTML e CSS"
        />
        <S.P>HTML5 E CSS3: MÓDULO 2 - Curso em Vídeo</S.P>
      </S.DivCertificados>
      <S.DivCertificados>
        <S.ImgCertificados
          src={certificadoHTML3}
          alt="Certificado do módulo 3 Cruso em Vídeo HTML e CSS"
        />
        <S.P>HTML5 E CSS3: MÓDULO 3 - Curso em Vídeo</S.P>
      </S.DivCertificados>
      <S.DivCertificados>
        <S.ImgCertificados
          src={certificadoLogicaProgramacao}
          alt="Certificado do curso da Soul Code de lógica de programação"
        />
        <S.P>Curso Lógica de Programação - SoulCode Academy</S.P>
      </S.DivCertificados>
    </S.ContainerCertificados>
  );
};

export default Certificados;

import React, { useState } from "react";
import * as S from "../styles/certificadosStyled";
import Modal from "react-modal";
import certificadoSoulCode from "../img/certificadoSOulCode.png";
import certificadoHTML1 from "../img/certificadoHTML1.jpg";
import certificadoHTML2 from "../img/certificadoHTML2.jpg";
import certificadoHTML3 from "../img/certificadoHTML3.jpg";
import certificadoLogicaProgramacao from "../img/certificadoLogicaProgramacao.jpg";
import Lottie from "react-lottie";
import CertificadosAnimation from "../../assets/lotties/certificados.json";

const Certificados = () => {

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: CertificadosAnimation,
    };

    setTimeout(() => {
      const container = document.getElementById("container");
      const animationCertificados = document.getElementById("animationCertificados");
      container.style.display = "initial";
      animationCertificados.style.display = "none";
    }, 2500);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);
  const [modalOpen4, setModalOpen4] = useState(false);
  const [modalOpen5, setModalOpen5] = useState(false);

  const HandleOpenModal = () => {
    return setModalOpen(true);
  };

  const HandleOpenModal2 = () => {
    return setModalOpen2(true);
  };

  const HandleOpenModal3 = () => {
    return setModalOpen3(true);
  };

  const HandleOpenModal4 = () => {
    return setModalOpen4(true);
  };

  const HandleOpenModal5 = () => {
    return setModalOpen5(true);
  };


  const HandleCloseModal = () => {
    setModalOpen(false);
  };

  const HandleCloseModal2 = () => {
    setModalOpen2(false);
  };

  const HandleCloseModal3 = () => {
    setModalOpen3(false);
  };

  const HandleCloseModal4 = () => {
    setModalOpen4(false);
  };

  const HandleCloseModal5 = () => {
    setModalOpen5(false);
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
    <>
    <div id='animationCertificados'>
        <Lottie options={defaultOptions} height={400} width={400}/>
    </div>
    <S.Certificados id="container">
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
            <S.ImgCertificadosMobile
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
            <S.ImgCertificadosMobile
              src={certificadoHTML1}
              alt=""
            />
          </Modal>
          <S.P>HTML5 E CSS3: MÓDULO 1 - Curso em Vídeo</S.P>
        </S.DivCertificados>
        <S.DivCertificados>
        <button
            onClick={() => {
              HandleOpenModal3();
            }}
          >
          <S.ImgCertificados
            src={certificadoHTML2}
            alt="Certificado do módulo 2 Cruso em Vídeo HTML e CSS"
          />
          </button>
          <Modal
            isOpen={modalOpen3}
            onRequestClose={HandleCloseModal3}
            style={customStyles}
          >
            <S.ImgCertificadosMobile
              src={certificadoHTML2}
              alt=""
            />
          </Modal>
          <S.P>HTML5 E CSS3: MÓDULO 2 - Curso em Vídeo</S.P>
        </S.DivCertificados>
        <S.DivCertificados>
        <button
            onClick={() => {
              HandleOpenModal4();
            }}
          >
          <S.ImgCertificados
            src={certificadoHTML3}
            alt="Certificado do módulo 3 Cruso em Vídeo HTML e CSS"
          />
          </button>
          <Modal
            isOpen={modalOpen4}
            onRequestClose={HandleCloseModal4}
            style={customStyles}
          >
            <S.ImgCertificadosMobile
              src={certificadoHTML3}
              alt=""
            />
          </Modal>
          <S.P>HTML5 E CSS3: MÓDULO 3 - Curso em Vídeo</S.P>
        </S.DivCertificados>
        <S.DivCertificados>
        <button
            onClick={() => {
              HandleOpenModal5();
            }}
          >
          <S.ImgCertificados
            src={certificadoLogicaProgramacao}
            alt="Certificado do curso da Soul Code de lógica de programação"
          />
          </button>
          <Modal
            isOpen={modalOpen5}
            onRequestClose={HandleCloseModal5}
            style={customStyles}
          >
            <S.ImgCertificadosMobile
              src={certificadoLogicaProgramacao}
              alt=""
            />
          </Modal>
          <S.P>Curso Lógica de Programação - SoulCode Academy</S.P>
        </S.DivCertificados>
      </S.ContainerCertificados>
    </S.Certificados>
    </>
  );
};

export default Certificados;

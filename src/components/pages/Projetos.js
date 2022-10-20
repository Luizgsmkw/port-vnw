import React from "react";
import "../styles/projetosCss.css";
import { AiFillGithub, AiOutlineGlobal } from "react-icons/ai";
import projetosAnimation from "../../assets/lotties/projetos.json";
import Lottie from "react-lottie";

const Projetos = () => {
  const GitHub = <AiFillGithub />;
  const Deploy = <AiOutlineGlobal />;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: projetosAnimation,
  };

  setTimeout(() => {
    const container = document.getElementById("container");
    const animationProjects = document.getElementById("animationProjects");
    container.style.display = "initial";
    animationProjects.style.display = "none";
  }, 4000);

  return (
    <>
      <div id="animationProjects">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      <section className="sectionProjects" id="container">
        <main>
          <div className="card1">
            <div className="info">
              <h1 className="title titleWine">E-wine: e-commerce de vinho</h1>
              <p className="description">
                E-wine é um e-commerce de vinho. No seu desenvolvimento as
                tecnologias utilizadas foram: TypeScript, CSS3, HTML5, NG
                Bootstrap e Angular. A aplicação está toda responsiva e também
                foi feito o consumo de uma API de clima para a página de
                "Indicações".
              </p>
              <div className="projects-links">
                <a
                  href="https://github.com/Luizgsmkw/e-wine"
                  target="_blank"
                  className="social-btn"
                >
                  <p className="iconGitHub">{GitHub}</p>
                  <p className="repositorio">Repositório</p>
                </a>
                <a
                  href="https://luizgsmkw.github.io/e-wine/"
                  target="_blank"
                  className="social-btn"
                >
                  <p className="iconGlobal">{Deploy}</p>
                  <p className="deploy">Deploy</p>
                </a>
              </div>
            </div>
          </div>
          <div class="card2">
            <div class="info">
              <h1 class="title titleFilmax">
                Filmax: API de indicações de filmes
              </h1>
              <p class="description">
                O Filmax foi feito utilizando React e o consumo da API de filmes
                do IMDb. No projeto, utilizei styledcomponent para dar
                estilização, react-router-dom para as rotas e o axios para
                consumir a API. Também foi utilizado o component de classe.
              </p>
              <div className="projects-links">
                <a
                  href="https://github.com/Luizgsmkw/filmax"
                  target="_blank"
                  className="social-btn"
                >
                  <p className="iconGitHub">{GitHub}</p>
                  <p className="repositorio">Repositório</p>
                </a>
                <a
                  href="https://filmax-chny.vercel.app"
                  target="_blank"
                  className="social-btn"
                >
                  <p className="iconGlobal">{Deploy}</p>
                  <p className="deploy">Deploy</p>
                </a>
              </div>
            </div>
          </div>
          <div class="card3">
            <div class="info">
              <h1 class="title">Sunnyside</h1>
              <p class="description">
                O Sunnyside foi um ótimo desafio para treinar conhecimentos de
                HTML e CSS, principalmente as habilidades com responsividade.
                Também foi essencial para treinar o desenvolvimento de um menu
                móvel (menu-hamburguer), utilizando Javascript.
              </p>
              <div className="projects-links">
                <a
                  href="https://github.com/Luizgsmkw/Sunnyside"
                  target="_blank"
                  className="social-btn"
                >
                  <p className="iconGitHub">{GitHub}</p>
                  <p className="repositorio">Repositório</p>
                </a>
                <a
                  href="https://luizgsmkw.github.io/Sunnyside/"
                  target="_blank"
                  className="social-btn"
                >
                  <p className="iconGlobal">{Deploy}</p>
                  <p className="deploy">Deploy</p>
                </a>
              </div>
            </div>
          </div>
          <div class="card4">
            <div class="info">
              <h1 class="title">Todo-App</h1>
              <p class="description">
                O Todo-App foi um ótimo desafio para melhorar meus conhecimentos
                sobre o DOM, pois além de ter que fazer uma lista de tarefas,
                era necessário fazer um Dark Mode. Para realizar o desafio
                utilizei JavaScript, CSS e HTML.
              </p>
              <div className="projects-links">
                <a
                  href="https://github.com/Luizgsmkw/todo-list"
                  target="_blank"
                  className="social-btn"
                >
                  <p className="iconGitHub">{GitHub}</p>
                  <p className="repositorio">Repositório</p>
                </a>
                <a
                  href="https://luizgsmkw.github.io/todo-list/"
                  target="_blank"
                  className="social-btn"
                >
                  <p className="iconGlobal">{Deploy}</p>
                  <p className="deploy">Deploy</p>
                </a>
              </div>
            </div>
          </div>
          <div class="card5">
            <div class="info">
              <h1 class="title">Crespos</h1>
              <p class="description">
                O Crespos foi um dos projetos mais desafiadores que fiz no
                quesito de HTML e CSS, por causa da responsividade e organização
                dos componentes na página. Com esse projeto consegui aprimorar
                meus conhecimentos em media query e flexbox.
              </p>
              <div className="projects-links">
                <a
                  href="https://github.com/Luizgsmkw/Projeto-Crespos"
                  target="_blank"
                  className="social-btn"
                >
                  <p className="iconGitHub">{GitHub}</p>
                  <p className="repositorio">Repositório</p>
                </a>
                <a
                  href="https://luizgsmkw.github.io/Projeto-Crespos/"
                  target="_blank"
                  className="social-btn"
                >
                  <p className="iconGlobal">{Deploy}</p>
                  <p className="deploy">Deploy</p>
                </a>
              </div>
            </div>
          </div>
          <div class="card6">
            <div class="info">
              <h1 class="title">ODS - Belo Horizonte</h1>
              <p class="description">
                O ODS-Belo-Horizonte foi um projeto realizado para demonstrar
                alguns programas que minha cidade realiza para atingir os
                Objetivos de Desenvolvimento Sustentável e, dessa forma, se
                tornar uma cidade mais inclusivas e sustentável. Utilizei
                utilizei styledcomponent para dar estilização, react-router-dom
                para as rotas e props para fazer componentização. 
              </p>
              <div className="projects-links">
                <a
                  href="https://github.com/Luizgsmkw/ODS-Belo-Horizonte"
                  target="_blank"
                  className="social-btn"
                >
                  <p className="iconGitHub">{GitHub}</p>
                  <p className="repositorio">Repositório</p>
                </a>
                <a
                  href="https://ods-belo-horizonte.vercel.app/"
                  target="_blank"
                  className="social-btn"
                >
                  <p className="iconGlobal">{Deploy}</p>
                  <p className="deploy">Deploy</p>
                </a>
              </div>
            </div>
          </div>
          <div class="card7">
            <div class="info">
              <h1 class="title">Fylo</h1>
              <p class="description">
                O Fylo foi um desafio do Frontend Mentor que fiz utilizando
                HTML, Sass (Sass é a linguagem de extensão CSS, que deixa o CSS
                com mais funcionalidades) e JavaScript. Também utilizei de
                expressões regulares para fazer a validação do input de email.
              </p>
              <div className="projects-links">
                <a
                  href="https://github.com/Luizgsmkw/Fylo-"
                  target="_blank"
                  className="social-btn"
                >
                  <p className="iconGitHub">{GitHub}</p>
                  <p className="repositorio">Repositório</p>
                </a>
                <a
                  href="https://luizgsmkw.github.io/Fylo-/"
                  target="_blank"
                  className="social-btn"
                >
                  <p className="iconGlobal">{Deploy}</p>
                  <p className="deploy">Deploy</p>
                </a>
              </div>
            </div>
          </div>
          <div class="card8">
            <div class="info">
              <h1 class="title">Cura</h1>
              <p class="description">
                O Fylo foi um desafio do Frontend Mentor que fiz utilizando
                HTML, Sass (Sass é a linguagem de extensão CSS, que deixa o CSS
                com mais funcionalidades) e JavaScript. Também utilizei de
                expressões regulares para fazer a validação do input de email.
              </p>
              <div className="projects-links">
                <a
                  href="https://github.com/Luizgsmkw/Cura-BH"
                  target="_blank"
                  className="social-btn"
                >
                  <p className="iconGitHub">{GitHub}</p>
                  <p className="repositorio">Repositório</p>
                </a>
                <a
                  href="https://luizgsmkw.github.io/Cura-BH/"
                  target="_blank"
                  className="social-btn"
                >
                  <p className="iconGlobal">{Deploy}</p>
                  <p className="deploy">Deploy</p>
                </a>
              </div>
            </div>
          </div>
          <div class="card9">
            <div class="info">
              <h1 class="title">ProjetoGitHub</h1>
              <p class="description">
                No ProjetoGitHub fiz o consumo da API do GitHub para poder buscar repositórios e informações dos usuários. Utilizei as tecnologias de
                HTML, CSS  e JavaScript. Além de ter utilizado o DOM para criação dos cards dos repositórios e a Fetch API para consumir a API. 
              </p>
              <div className="projects-links">
                <a
                  href="https://github.com/Luizgsmkw/ProjetoGitHub"
                  target="_blank"
                  className="social-btn"
                >
                  <p className="iconGitHub">{GitHub}</p>
                  <p className="repositorio">Repositório</p>
                </a>
                <a
                  href="https://luizgsmkw.github.io/ProjetoGitHub/"
                  target="_blank"
                  className="social-btn"
                >
                  <p className="iconGlobal">{Deploy}</p>
                  <p className="deploy">Deploy</p>
                </a>
              </div>
            </div>
          </div>
          <div class="card10">
            <div class="info">
              <h1 class="title">Huddle</h1>
              <p class="description">
                O Huddle foi um ótimo desafio para consolidar meus conhecimentos
                de HTML e CSS e as habilidades com responsividade. Também foi
                essencial para treinar no CSS as seções com bordas curvas,
                utilizando o background-image.
              </p>
              <div className="projects-links">
                <a
                  href="https://github.com/Luizgsmkw/Huddle"
                  target="_blank"
                  className="social-btn"
                >
                  <p className="iconGitHub">{GitHub}</p>
                  <p className="repositorio">Repositório</p>
                </a>
                <a
                  href="https://luizgsmkw.github.io/Huddle/"
                  target="_blank"
                  className="social-btn"
                >
                  <p className="iconGlobal">{Deploy}</p>
                  <p className="deploy">Deploy</p>
                </a>
              </div>
            </div>
          </div>
          <div class="card11">
            <div class="info">
              <h1 class="title">Pokken</h1>
              <p class="description">
                O Pokken foi um projeto que tentei replicar o que foi feito
                durante a MAPADEV WEEK. Utilizei estrutura condicional e DOM
                para fazer a troca de cards. No CSS utilizei Flexbox e Media
                Query para fazer a responsividade, além do hover para fazer
                transações de cores.
              </p>
              <div className="projects-links">
                <a
                  href="https://github.com/Luizgsmkw/pokken"
                  target="_blank"
                  className="social-btn"
                >
                  <p className="iconGitHub">{GitHub}</p>
                  <p className="repositorio">Repositório</p>
                </a>
                <a
                  href="https://luizgsmkw.github.io/pokken/"
                  target="_blank"
                  className="social-btn"
                >
                  <p className="iconGlobal">{Deploy}</p>
                  <p className="deploy">Deploy</p>
                </a>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Projetos;

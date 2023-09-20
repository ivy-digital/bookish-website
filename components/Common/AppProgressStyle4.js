import React from "react";
import Link from "next/link";

const AppProgressStyle4 = () => {
  return (
    <>
      <div className="app-progress-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="app-progress-image text-center">
                <img src="/images/app/app-img2.png" alt="app-img" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="app-progress-content">
                <span className="sub-title">SOBRE O APLICATIVO</span>
                <h2>Tudo o que Você Vai Encontrar no Aplicativo</h2>
                <p>
                  Estamos entusiasmados em apresentar o nosso mais recente
                  empreendimento tecnológico: o aplicativo que está prestes a
                  transformar a forma como você empreendedor vai se conecta com
                  Matão! Este aplicativo inovador é uma verdadeira central de
                  informações, projetada para simplificar e melhorar a sua vida
                  para levar sua empresa de forma ágil cada vez mais perto dos
                  matonenses.
                </p>
                <p>
                  Com este aplicativo, você poderá publicar informações
                  relevantes da sua empresa como local, horário de atendimento,
                  novidades, etc. ocê poderá publicar as vagas de emprego da sua
                  empresa e ter um alcance de visualizaçã muito maior. E poderá
                  fazer divulgação de eventos! É a chance de você conectar a sua
                  empresa com toda cidade de Matão.
                </p>
                <p>Você não vai ficar de fora né?!</p>

                <Link href="/sign-in">
                  <a className="default-btn">Cadastre-se Agora</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppProgressStyle4;

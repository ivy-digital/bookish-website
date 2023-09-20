import React from "react";
import NavbarStyleTwo from "@/components/_App/NavbarStyleTwo";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import AppDownloadStyle2 from "@/components/Common/AppDownloadStyle2";
import Rodape from "@/components/_App/Rodape";
import Link from "next/link";

const HowItWorks = () => {
  return (
    <>
      <NavbarStyleTwo />

      <PageBannerStyle1
        pageTitle="Como Funciona"
        homePageUrl="/"
        homePageText="Início"
        activePageText="Como Funciona"
      />

      <div className="how-it-works-area ptb-100">
        <div className="container">
          <div className="how-it-works-content">
            <div className="number">1</div>

            <div className="row m-0">
              <div className="col-lg-3 col-md-12 p-0">
                <div className="box">
                  <h3>Etapa 1</h3>
                  <span>Preecha o Formulário</span>
                </div>
              </div>

              <div className="col-lg-9 col-md-12 p-0">
                <div className="content" style={{ textAlign: 'center', marginTop: 80 }}>
                  <p>Preecha o Formulário de cadastro com os dados do seu negócio</p>
                  <a href="/cadastre-se" style={{ fontWeight: 'bold', color: '#3e5bbf' }}>
                    <h6>
                      Clique aqui para acessar o formulário
                    </h6>
                  </a>
                  <img
                    src="/images/how-it-works/preencha-formulario.png"
                    alt="create-account"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="how-it-works-content">
            <div className="number">2</div>
            <div className="row m-0">
              <div className="col-lg-3 col-md-12 p-0">
                <div className="box">
                  <h3>Etapa 2</h3>
                  <span>Envie o Formulário</span>
                </div>
              </div>
              <div className="col-lg-9 col-md-12 p-0">
                <div className="content">
                  <p>
                    Seus dados serão recebidos e em seguida você receberá um e-mail confirmando seu cadastro e acesso liberado à plataforma.
                  </p>
                  <img
                    src="/images/how-it-works/acesso-plataforma.jpg"
                    alt="payment-method"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="how-it-works-content">
            <div className="number">3</div>
            <div className="row m-0">
              <div className="col-lg-3 col-md-12 p-0">
                <div className="box">
                  <h3>Etapa 3</h3>
                  <span>Próximos passos</span>
                </div>
              </div>
              <div className="col-lg-9 col-md-12 p-0">
                <div className="content">
                  <p>
                    Uma vez dentro da plataforma, conclua os próximos passos, preenchendo os dados da sua empresa.
                  </p>
                  <img
                    src="/images/how-it-works/proximos-passos.png"
                    alt="confirm-order"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AppDownloadStyle2 />

      <Rodape />
    </>
  );
};

export default HowItWorks;

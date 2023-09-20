import React from "react";
import NavbarStyleTwo from "@/components/_App/NavbarStyleTwo";
import PageBannerStyle2 from "@/components/Common/PageBannerStyle2";
import AppProgressStyle4 from "@/components/Common/AppProgressStyle4";
import AppDownloadStyle1 from "@/components/Common/AppDownloadStyle1";
import FunfactStyleTwo from "@/components/Common/FunfactStyleTwo";
import ClientFeedbackStyle5 from "@/components/Feedbacks/ClientFeedbackStyle5";
import TeamMemberStyle2 from "@/components/Common/TeamMemberStyle2";
import PartnerStyle3 from "@/components/Common/PartnerStyle3";
import Rodape from "@/components/_App/Rodape";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";
import AppDownloadStyle2 from "@/components/Common/AppDownloadStyle2";

const AboutModern = () => {
  return (
    <>
      <NavbarStyleTwo />

      <PageBannerStyle2
        pageTitle="Sobre Nós"
        homePageUrl="/"
        homePageText="Início"
        activePageText="Sobre Nós"
      />

      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <span className="sub-title">Sobre Nós</span>
                <h2>
                  Viemos para revolucionar o acesso das informações em Matão
                </h2>
                <p>
                  Nos últimos anos, a tecnologia tem desempenhado um papel
                  significativo na melhoria de vida nas cidades. Nós da Info
                  Matão, desevolvemos um aplicativo revolucionário que tem como
                  objetivo facilitar o acesso a informações cruciais para toda a
                  população. Esse aplicativo está mudando a forma como os
                  cidadãos interagem com a cidade, proporcionando uma
                  experiência mais eficiente e conectada.
                </p>

                <div className="features-text">
                  <h6>Nosso Aplicativo</h6>
                  <p>
                    O aplicativo Info Matão oferece uma solução abrangente para
                    diversos desafios enfrentados pela população. Desde notícias
                    sobre a cidade e região até eventos e atualizações sobre
                    vagas de empregos e serviços municipais.
                    <br />O aplicativo se tornou um local central para conseguir
                    todas as informações necessárias!
                  </p>
                </div>

                <div className="features-text">
                  <h6>Nossa Missão</h6>
                  <p>
                    O impacto do aplicativo no dia a dia dos cidadãos é
                    inegável. A facilidade de acesso às informações essenciais
                    da cidade aumentou a eficiência na tomada de decisões
                    diárias, reduziu o tempo gasto para encontrar informações e
                    melhorou a participação da comunidade em eventos e serviços
                    locais. Além disso, a cidade como um todo se beneficia da
                    redução da burocracia, da otimização dos serviços municipais
                    e da promoção de um ambiente mais conectado e colaborativo.
                  </p>
                </div>

                <div className="btn-box">
                  <Link href="https://play.google.com/store/apps">
                    <a className="default-btn">Cadastre-se Agora</a>
                  </Link>
                  {/*
                  <Link href="/features">
                    <a className="link-btn">See All Features</a>
                  </Link>
                  */}
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-img">
                <ScrollAnimation animateIn="fadeInUp">
                  <img src="/images/infomatao_img_sobrenos.png" alt="about" />
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AppProgressStyle4 />

      <AppDownloadStyle2 />

      {
        /**
          <ClientFeedbackStyle5 />

          <TeamMemberStyle2 />

          <PartnerStyle3 />
        */
      }

      <Rodape />
    </>
  );
};

export default AboutModern;

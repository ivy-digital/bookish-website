import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const AppDownloadStyle2 = () => {
  return (
    <>
      <div className="app-download-area pb-100">
        <div className="container">
          <div className="app-download-inner bg-gray">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="app-download-content">
                  <span className="sub-title">BAIXE O APP</span>
                  <h2>Baixe o aplicativo agora mesmo</h2>
                  <p>
                    Baixe o aplicativo e fique por dentro de tudo sobre a cidade
                    de Matão. Notícias, estabelecimentos, empregos e eventos.
                    Tudo grátis em um só lugar!
                  </p>

                  <div className="btn-box">
                    <a
                      href="https://play.google.com/store/apps"
                      className="playstore-btn"
                      target="_blank"
                    >
                      <img src="/images/play-store.png" alt="image" />
                      Baixar no
                      <span>Google Play</span>
                    </a>
                    <a
                      href="https://www.apple.com/app-store/"
                      className="applestore-btn"
                      target="_blank"
                    >
                      <img src="/images/apple-store.png" alt="image" />
                      Baixar na
                      <span>Apple Store</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="app-download-image">
                  <ScrollAnimation animateIn="fadeInUp">
                    <img
                      src="/images/infomatao_img_celular_3.png"
                      alt="app-img"
                    />
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDownloadStyle2;

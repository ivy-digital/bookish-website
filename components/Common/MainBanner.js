import React from "react";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";

const MainBanner = () => {
  return (
    <>
      <div className="banner-wrapper-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="banner-wrapper-content">
                <h1>Destaque seu negócio com o Info Matão</h1>
                <p>
                  Aumente sua presença digital e potencialize seus negócios!<br/>
                  Seu negócio com a visibilidade que merece<br/>
                </p>
                <Link href="/cadastre-se">
                  <a className="default-btn">Comece Agora</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12" style={{ paddingLeft: "5rem" }}>
              <div
                className="banner-wrapper-image"
                style={{ marginRight: "0rem" }}
              >
                {/**
                   * <div className="banner-img">
                        <img
                          src="/images/infomatao_img_celular_1.png"
                          alt="banner-img"
                        />
                      </div>
                   */}

                <div className="banner-img" style={{ marginLeft: "-15rem" }}>
                  <ScrollAnimation
                    animateIn="fadeInLeft"
                    animateOnce={true}
                    initiallyVisible={true}
                  >
                    <img
                      src="/images/infomatao_img_celular_2.png"
                      alt="banner-img"
                    />
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape13">
          <img src="/images/shape/shape7.png" alt="shape" />
        </div>
        <div className="shape14">
          <img src="/images/shape/shape17.png" alt="shape" />
        </div>
        <div className="shape7">
          <img src="/images/shape/shape21.png" alt="shape" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;

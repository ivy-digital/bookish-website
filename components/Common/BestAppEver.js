import React from "react";
import Link from "next/link";

const BestAppEver = () => {
  return (
    <>
      <div className="overview-area" style={{ marginTop: '3rem' }}>
        <div className="container-fluid">
          <div className="row m-0">
            <div className="col-xl-6 col-lg-12 col-md-12 p-0">
              <div className="overview-content">
                {/* <h2>Seu negócio onde todos podem ver</h2> */}
                <h2>Seu negócio com a visibilidade que merece</h2>
                <p>
                  Destaque-se na cidade! Cadastre-se agora mesmo em nosso site e
                  alcance visibilidade para sua empresa. Com acesso do público
                  exclusivo de Matão, você expandirá seu negócio, conquistará
                  novos clientes e se tornará uma referência local. Aproveite
                  esta oportunidade única de se destacar e crescer no mercado!
                  Cadastre-se já e faça sua marca ser conhecida por todos!
                </p>

                <ul className="features-list">
                  <li>
                    <div className="icon">
                      <i className="ri-download-cloud-2-line"></i>
                    </div>
                    <h3>Relevante</h3>
                    <p>
                      Conte com um aplicativo onde todo o publico matonense tem
                      acesso. Literalmente seu público em um só lugar! Com isso
                      você terá mais relevância na sua empresa alcançando o
                      público certo.
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="ri-award-line"></i>
                    </div>
                    <h3>Coerente</h3>
                    <p>
                      Com uma interface amigável e sem poluição visual, você
                      anuncia sua empresa em uma plataforma onde seu público
                      tenha prazer em ver seus anúncios, tornando a experiência
                      do usuário mais agradável e eficaz.
                    </p>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="ri-cloud-line"></i>
                    </div>
                    <h3>Confiável</h3>
                    <p>
                      Nada de sites lentos, poluídos e antigos. O aplicativo é a
                      foma mais rápida e segura de acessar as informações
                      necessárias, com certeza é a melhor forma do seu público
                      encontrar sua empresa.
                    </p>
                  </li>
                </ul>

                <div className="btn-box">
                  <Link href="/contact">
                    <a className="default-btn">Começar agora</a>
                  </Link>
                  {/*
                    <Link href="/features">
                      <a className="link-btn">See All Features</a>
                    </Link>
                    */}
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-12 col-md-12 p-0">
              <div className="overview-image bg1">
                <img src="/images/overview11.jpeg" alt="overview" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestAppEver;

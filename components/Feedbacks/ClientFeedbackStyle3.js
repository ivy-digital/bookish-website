import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  nav: false,
  loop: true,
  margin: 25,
  dots: true,
  center: true,
  autoplay: true,
  autoplayHoverPause: true,
  navText: [
    "<i class='ri-arrow-left-s-line'></i>",
    "<i class='ri-arrow-right-s-line'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
};

const ClientFeedbackStyle3 = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <>
      <div className="feedback-area bg-F4F8FC ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Avaliação dos Clientes</span>
            <h2>Algumas avaliações de quem já usa o Info Matão!</h2>
          </div>

          {display ? (
            <OwlCarousel
              className="feedback-slides owl-carousel owl-theme"
              {...options}
            >
              <div className="single-feedback-box">
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <img src="/images/aguasclaraslogo.jpg" alt="user" />
                    <div className="title">
                      <h3>Águas Claras Matão</h3>
                      <span>Distribuidora de Água</span>
                    </div>
                  </div>
                </div>
                <p>
                  "O destaque para empresários e a possibilidade de anunciar
                  minha empresa no aplicativo me proporcionaram uma visibilidade
                  inigualável. Não apenas alcancei um público mais amplo, como
                  também tive a oportunidade de me conectar com outros
                  empresários locais, abrindo portas para novas parcerias."
                </p>
                <div className="rating d-flex align-items-center justify-content-between">
                  <h5>Anderson Galleani</h5>
                  <div>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
              </div>

              <div className="single-feedback-box">
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <img src="/images/grannobre.jpg" alt="user" />
                    <div className="title">
                      <h3>Marmoraria Gran Nobre Matão</h3>
                      <span>Especialista em Mármores e Granitos</span>
                    </div>
                  </div>
                </div>
                <p>
                  "O impacto positivo desse aplicativo na minha trajetória como
                  empresário é inegável! Ao cadastrar minha empresa nele,
                  percebi um aumento significativo na visibilidade e alcance do
                  meu negócio. Através das diversas funcionalidades, pude
                  promover meus produtos e serviços de forma eficiente."
                </p>
                <div className="rating d-flex align-items-center justify-content-between">
                  <h5>Maria Beatriz Ribeiro</h5>
                  <div>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
              </div>

              <div className="single-feedback-box">
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <img src="/images/francinepresenteslogo.jpg" alt="user" />
                    <div className="title">
                      <h3>Francine Presentes</h3>
                      <span>Loja de Produtos Importados</span>
                    </div>
                  </div>
                </div>
                <p>
                  "Acredito que todo empresário deveria aproveitar essa incrível
                  oportunidade para destacar suas marcas na cidade. Esse
                  aplicativo se tornou um poderoso aliado para impulsionar meu
                  sucesso empresarial e estou entusiasmado para explorar ainda
                  mais seu potencial."
                </p>
                <div className="rating d-flex align-items-center justify-content-between">
                  <h5>Roberval Frontarolli</h5>
                  <div>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
              </div>

              <div className="single-feedback-box">
                <div className="client-info">
                  <div className="d-flex align-items-center">
                    <img src="/images/elitelogo.png" alt="user" />
                    <div className="title">
                      <h3>Confecções Elite</h3>
                      <span>Fabricação de Roupas Esportivas</span>
                    </div>
                  </div>
                </div>
                <p>
                  "A interação com outros empresários na plataforma proporcionou
                  uma rica troca de ideias e oportunidades de networking. Fui
                  capaz de estabelecer parcerias estratégicas que impulsionaram
                  o crescimento da minha empresa de maneira surpreendente. Vale
                  a pena se cadastrar!"
                </p>
                <div className="rating d-flex align-items-center justify-content-between">
                  <h5>Eder Biagi</h5>
                  <div>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default ClientFeedbackStyle3;

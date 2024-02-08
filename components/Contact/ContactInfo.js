import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area pb-100">
        <div className="container">
          <div className="text-center pb-75 pt-75">
            <h2>Entre em contato conosco</h2>
            <p>
              Tem alguma dúvida, sugestão ou precisa de suporte? Ficaremos felizes em ajudar! <br />
              Use os detalhes de contato fornecidos e nossa equipe responderá o mais breve possível.
            </p>
          </div>
          <div className="contact-info-inner">

            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-contact-info-box">
                  <div className="icon bg1">
                    <i className="ri-customer-service-2-line"></i>
                  </div>
                  <h3>
                    <a href="tel:+551600000-0000">(16)99714-4285</a>
                  </h3>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-contact-info-box">
                  <div className="icon">
                    <i className="ri-earth-line"></i>
                  </div>
                  <h3>
                    <a href="mailto:hello@texap.com">
                      contato@infomatao.com.br
                    </a>
                  </h3>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-contact-info-box">
                  <div className="icon bg2">
                    <i className="ri-map-pin-line"></i>
                  </div>
                  <h3>
                    <a href="https://linktr.ee/infomatao" target={"_blank"}>
                      Redes Sociais
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            <div className="lines">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;

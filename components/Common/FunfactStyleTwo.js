import React from "react";

const FunfactStyleTwo = () => {
  return (
    <>
      <div className="funfacts-area ptb-100">
        <div className="container">
          <div className="row justify-content-center m-0">
            <div className="col-lg-3 col-sm-6 col-md-6 p-0">
              <div className="funfacts-box mb-0">
                <div className="icon">
                  <i className="ri-download-2-line"></i>
                </div>
                <p>Total Downloads</p>
                <h3>
                  10<span className="sign">M</span>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6 p-0">
              <div className="funfacts-box bg1 mb-0">
                <div className="icon">
                  <i className="ri-star-fill"></i>
                </div>
                <p>Total Avaliações</p>
                <h3>
                  799<span className="sign">K</span>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6 p-0">
              <div className="funfacts-box bg2 mb-0">
                <div className="icon">
                  <i className="ri-global-line"></i>
                </div>
                <p>Total Empresas Cadastradas</p>
                <h3>
                  150<span className="sign">+</span>
                </h3>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-6 p-0">
              <div className="funfacts-box bg3 mb-0">
                <div className="icon">
                  <i className="ri-map-pin-user-line"></i>
                </div>
                <p>Usuários Ativos</p>
                <h3>
                  5<span className="sign">M</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunfactStyleTwo;

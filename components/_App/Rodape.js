// Footer Component Style File Path: public/css/pages-and-components-css/footer.scss

import React from "react";
import Link from "next/link";

const Rodape = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="footer-area footer-style-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <Link href="/">
                  <a className="logo">
                    <img src="/images/infomatao-logo.png" alt="logo" />
                  </a>
                </Link>

                <p>
                  Descubra tudo o que acontece na cidade em um só lugar! <br />
                  O seu guia completo para notícias locais, <br />
                  estabelecimentos, eventos e vagas de emprego.
                </p>

                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/people/Info-Mat%C3%A3o/100093946997660/" target="_blank">
                      <i className="ri-facebook-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/infomatao/" target="_blank">
                      <i className="ri-instagram-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/+5516997144285" target="_blank">
                      <i className="ri-whatsapp-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:contato@infomatao.com.br" target="_blank">
                      <i className="ri-mail-fill"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget pl-2">
                <h3>Empresa</h3>
                <ul className="links-list">
                  <li>
                    <Link href="/">
                      <a>Início</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/sobre-nos">
                      <a>Sobre Nós</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contato">
                      <a>Contato</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cadastre-se">
                      <a>Cadastre-se Agora</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="single-footer-widget">
                <h3>Links Úteis</h3>
                <ul className="links-list">
                  <li>
                    <Link href="/politica-privacidade">
                      <a>Política de Privacidade</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/termos-condicoes">
                      <a>Termos e Condições</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/como-funciona">
                      <a>Como Funciona</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <p>
              Copyright &copy; {currentYear} <strong>Info Matão</strong>. Todos
              os direitos reservados por{" Info Matão"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rodape;

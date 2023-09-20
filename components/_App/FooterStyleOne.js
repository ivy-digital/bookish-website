// Footer Component Style File Path: public/css/pages-and-components-css/footer.scss

import React from "react";
import Link from "next/link";

const FooterStyleOne = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="footer-area">
        <div className="container">
          <div className="footer-content">
            <Link href="/">
              <a className="logo">
                <img src="/images/infomatao-logo.png" alt="logo" />
              </a>
            </Link>

            {/*Colocar rede social Instagram e Email*/}
            <ul className="social-links">
              <li>
                <a href="https://www.facebook.com/" target="_blank">
                  <i className="ri-facebook-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/" target="_blank">
                  <i className="ri-github-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://email.com/" target="_blank">
                  <i className="ri-github-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://email.com/" target="_blank">
                  <i className="ri-github-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://email.com/" target="_blank">
                  <i className="ri-github-fill"></i>
                </a>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/terms-conditions">
                  <a className="nav-link">Termos e Condições</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/privacy-policy">
                  <a className="nav-link">Política de Privacidade</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link">Contato</a>
                </Link>
              </li>
            </ul>

            <p className="copyright">
              Copyright &copy; {currentYear} <strong>Info Matão</strong>.
              Direitos Reservados a{" "}
              <a href="https://envytheme.com/" target="_blank">
                Info Matão
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterStyleOne;

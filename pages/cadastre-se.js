import React from "react";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import CadastroForm from "@/components/Contact/CadastroForm";
import Rodape from "@/components/_App/Rodape";
import NavbarStyleTwo from "@/components/_App/NavbarStyleTwo";

const CadastreSe = () => {
  return (
    <>
      <NavbarStyleTwo />

      <PageBannerStyle1
        pageTitle="Cadastre-se"
        homePageUrl="/"
        homePageText="Início"
        activePageText="cadastre-se"
      />

      <CadastroForm />

      <Rodape />
    </>
  );
};

export default CadastreSe;

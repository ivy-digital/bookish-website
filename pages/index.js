import React from "react";
import NavbarStyleTwo from "@/components/_App/NavbarStyleTwo";
import MainBanner from "@/components/Common/MainBanner";
import BestAppEver from "@/components/Common/BestAppEver";
import AppDownloadStyle2 from "@/components/Common/AppDownloadStyle2";
import AvaliacoesDeClientes from "@/components/Feedbacks/AvaliacoesDeClientes";
import Rodape from "@/components/_App/Rodape";

const IndexPage3 = () => {
  return (
    <>
      <NavbarStyleTwo />

      <MainBanner />

      <BestAppEver />

      <AvaliacoesDeClientes />

      <AppDownloadStyle2 />

      <Rodape />
    </>
  );
};

export default IndexPage3;

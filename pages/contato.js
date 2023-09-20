import React from "react";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import Rodape from "@/components/_App/Rodape";
import NavbarStyleTwo from "@/components/_App/NavbarStyleTwo";

const Contact = () => {
  return (
    <>
      <NavbarStyleTwo />

      <PageBannerStyle1
        pageTitle="Contato"
        homePageUrl="/"
        homePageText="Início"
        activePageText="Contato"
      />

      {
        /**
          <ContactForm />  
        */
      }

      <ContactInfo />

      <Rodape />
    </>
  );
};

export default Contact;

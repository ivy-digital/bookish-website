import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "@/utils/baseUrl";
import Link from "next/link";

const alertContent = () => {
  MySwal.fire({
    title: "Sucesso!",
    text: "Seu cadastro foi recebido. Em breve você vai receber um e-mail confirmando seu acesso à plataforma",
    icon: "success",
    timer: 15000,
    showCloseButton: true,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

const isValidCPF = (cpf) => {
  // Valida se o CPF é uma string
  if (typeof cpf !== "string") return false;

  // Remove todos os caracteres não numéricos do CPF
  cpf = cpf.replace(/[^0-9]/g, "");

  // Valida se o CPF tem 11 dígitos
  if (cpf.length !== 11) return false;

  // Valida se o CPF não contém repetições de dígitos
  if (cpf.match(/(\d)\1{10}/)) return false;

  // Calcula os dois dígitos verificadores
  const multiplicadores = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
  const soma = cpf.slice(0, 9).reduce((soma, digito, index) => soma + digito * multiplicadores[index], 0);
  const resto = soma % 11;
  const dv1 = 11 - resto;

  multiplicadores = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
  soma = (cpf.slice(0, 9) + dv1).reduce((soma, digito, index) => soma + digito * multiplicadores[index], 0);
  resto = soma % 11;
  const dv2 = 11 - resto;

  // Valida se os dígitos verificadores são iguais aos informados
  if (dv1 !== cpf[9] || dv2 !== cpf[10]) return false;

  return true;
}
const isValidCNPJ = (cnpj) => {
  cnpj = cnpj.replace(/[^\d]+/g,'');
 
  if(cnpj == '') return false;
    
  if (cnpj.length != 14)
      return false;

  // Elimina CNPJs invalidos conhecidos
  if (cnpj == "00000000000000" || 
      cnpj == "11111111111111" || 
      cnpj == "22222222222222" || 
      cnpj == "33333333333333" || 
      cnpj == "44444444444444" || 
      cnpj == "55555555555555" || 
      cnpj == "66666666666666" || 
      cnpj == "77777777777777" || 
      cnpj == "88888888888888" || 
      cnpj == "99999999999999")
      return false;
        
  // Valida DVs
  let tamanho = cnpj.length - 2
  let numeros = cnpj.substring(0,tamanho);
  let digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
      pos = 9;
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(0))
    return false;
        
  tamanho = tamanho + 1;
  numeros = cnpj.substring(0,tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
          pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(1))
    return false;
          
  return true;
}
const isValidEmail = (email) => {
  // Valida se o e-mail é uma string
  if (typeof email !== "string") return false;

  // Remove todos os caracteres não alfanuméricos do e-mail
  email = email.replace(/[^a-zA-Z0-9@._-]/g, "");

  // Valida se o e-mail tem um formato válido
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{2,6}$/;
  return regex.test(email);
}
const isValidWhatsapp = (whatsapp) => {
  if (typeof whatsapp !== "string") return false;
  const regex = /^\(\d{2}\)\s?\d{5}-\d{4}$/;
  return regex.test(whatsapp);
}

const PESSOA_FISICA = {
  value: 'pessoa_fisica',
  label: 'Pessoa Física - Profissionais Liberais sem CNPJ',
}
const PESSOA_JURIDICA = {
  value: 'pessoa_juridica',
  label: 'Pessoa Jurídica - Empresas e Estabelecimentos',
}
const BUSINESS_TYPES_OPTIONS = [
  PESSOA_FISICA,
  PESSOA_JURIDICA,
];

const INITIAL_STATE = {
  businessType: PESSOA_JURIDICA.value,
  cpf: "",
  cnpj: "",
  legalName: "",
  businessName: "",
  whatsapp: "",
  userName: "",
  userEmail: "",
  password: "",
  acceptTerms: false,
};

const CadastroForm = () => {
  const [cadastro, setCadastro] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState([]);
  const [accept, setAccept] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCadastro((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAcceptTerms = (e) => {
    const value = e.target.checked;
    setAccept(value);
  }

  const legalNamePlaceholder = cadastro.businessType == PESSOA_FISICA.value ? 'Nome Completo' : 'Razão Social';
  const businessNamePlaceholder = cadastro.businessType == PESSOA_FISICA.value ? 'Nome da Empresa' : 'Nome Fantasia';

  const validateFields = () => {
    // Validate form
    const formErros = [];

    const {
      businessType,
      cpf,
      cnpj,
      legalName,
      businessName,
      userName,
      whatsapp,
      userEmail,
      password,
    } = cadastro;

    const isPessoaFisica = businessType == PESSOA_FISICA.value;
    const validCPF = true;
    const validCNPJ = isValidCNPJ(cnpj);
    const validEmail = isValidEmail(userEmail);
    const validWhatsapp = isValidWhatsapp(whatsapp);

    if (isPessoaFisica && (!cpf || !validCPF)) {
      formErros.push(`CPF - Preenchimento obrigatório e valido`)
    }
    if (!isPessoaFisica && (!cnpj || !validCNPJ)) {
      formErros.push(`CNPJ - Preenchimento obrigatório e valido`)
    }
    if (!legalName) {
      formErros.push(`${legalNamePlaceholder} - Preenchimento obrigatório (até 120 caracteres)`)
    }
    if (!businessName) {
      formErros.push(`${businessNamePlaceholder} - Preenchimento obrigatório (até 120 caracteres)`)
    }
    if (!isPessoaFisica && !userName) {
      formErros.push(`Nome Completo - Preenchimento obrigatório (até 70 caracteres)`)
    }
    if (!validEmail) {
      formErros.push(`E-mail - Preenchimento obrigatório`)
    }
    if (!validWhatsapp) {
      formErros.push(`Whatsapp - Preenchimento obrigatório`)
    }
    if (!password || password.length < 5 || password.length > 30) {
      formErros.push(`Senha - Preenchimento obrigatório (de 5 a 30 caracteres)`)
    }

    return formErros;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!accept) {
      return MySwal.fire({
        title: "Aceite a Política de Privacidade e os Termos e Condições",
        text: "Aceite a Política de Privacidade e os Termos e Condições antes de enviar os dados.",
        icon: "error",
        timer: 8000,
        showCloseButton: true,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }

    const formErros = validateFields();
    if (formErros.length) {
      e.preventDefault();
      setErrors(formErros);
      return false;
    }

    e.preventDefault();
    try {
      const url = `${baseUrl}/website/join`;

      const {
        businessType,
        cpf,
        cnpj,
        legalName,
        businessName,
        userName,
        whatsapp,
        userEmail,
        password,
      } = cadastro;
      const isPessoaFisica = businessType == PESSOA_FISICA.value;

      const payload = {
        cpf: businessType === PESSOA_FISICA.value ? cpf : undefined,
        cnpj: businessType === PESSOA_JURIDICA.value ? cnpj : undefined,
        legalName,
        businessName,
        whatsapp,
        userName: isPessoaFisica ? legalName : userName,
        userEmail,
        password,
      };
      const response = await axios.post(url, payload)
                                  .catch((error) => {
                                    const status = error.response.status;

                                    if (status === 409) {
                                      MySwal.fire({
                                        title: "Estabelecimento já existente!",
                                        text: "Este CPF ou CNPJ já está cadastrado em outro estabelecimento!",
                                        icon: "error",
                                        timer: 15000,
                                        showCloseButton: true,
                                        timerProgressBar: true,
                                        showConfirmButton: false,
                                      });
                                    }
                                  });

      if (response.status === 200) {
        // success
      }
      if (response.status === 400) {
        
      }

      setCadastro(INITIAL_STATE);
      alertContent();
      setErrors([]);
    } catch (error) {
      console.log('ERORRRRRRRR', error);
    }
  };

  return (
    <>
      <div className="contact-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Preencha seus dados no formulário abaixo</h2>
            <p style={{ color: '#3e5bbf' }}>
              Você receberá um e-mail confirmando seu cadastro e será liberado o acesso à plataforma.
            </p>
          </div>

          {
            errors.length > 0 && (
              <fieldset style={{ width: '100%', marginBottom: 10, color: '#f07167' }}>
                {
                  errors.length > 0 && (
                    <h5 style={{ color: '#f07167' }}>
                      Dados Inválidos: Revise os dados e envie novamente
                    </h5>
                  )
                }

                <ul>
                  {
                    errors.length > 0 && errors.map(currentError => (
                      <li>
                        <h6 style={{ color: '#f07167', marginTop: 20, marginBottom: 15, }}>
                          { currentError }
                        </h6>
                      </li>
                    ))
                  }
                </ul>
              </fieldset>
            )
          }

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="row">
                
                { /** Tipo do estabelecimento */ }
                <div className="col-lg-12 col-md-12 col-sm-6">
                  <div
                    className="form-group"
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      flexDirection: 'column'
                    }}
                    >
                    <label style={{ fontWeight: 'bold', fontSize: 16 }}>
                      <input
                        type="radio"
                        name="businessType"
                        value={PESSOA_JURIDICA.value}
                        id={PESSOA_JURIDICA.value}
                        checked={cadastro.businessType === PESSOA_JURIDICA.value}
                        style={{ marginRight: 10 }}
                        onClick={handleChange}
                      />
                      { PESSOA_JURIDICA.label }
                    </label>
                    <br />
                    <label style={{ fontWeight: 'bold', fontSize: 16 }}>
                      <input
                        type="radio"
                        name="businessType"
                        value={PESSOA_FISICA.value}
                        id={PESSOA_FISICA.value}
                        checked={cadastro.businessType === PESSOA_FISICA.value}
                        style={{ marginRight: 10 }}
                        onClick={handleChange}
                      />
                      { PESSOA_FISICA.label }
                    </label>
                  </div>
                </div>

                {
                  /** CPF */
                  cadastro.businessType === PESSOA_FISICA.value && (
                    <div className="col-lg-12 col-md-12 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="cpf"
                          placeholder="CPF"
                          className="form-control"
                          value={cadastro.cpf}
                          onChange={handleChange}
                          autoComplete="off"
                          required
                          minLength={14}
                          maxLength={14}
                          pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                          title="Insira um CPF valido (000.000.000-00)"
                        />
                      </div>
                    </div>
                  )
                }

                {
                  /** CNPJ */
                  cadastro.businessType === PESSOA_JURIDICA.value && (
                    <div className="col-lg-12 col-md-12 col-sm-6">
                      <div className="form-group" style={{ textAlign: 'left' }}>
                        <input
                          type="text"
                          name="cnpj"
                          placeholder="CNPJ"
                          className="form-control"
                          value={cadastro.cnpj}
                          onChange={handleChange}
                          autoComplete="off"
                          required
                          minLength={18}
                          maxLength={18}
                          pattern="\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}"
                          title="Insira um CNPJ valido (00.000.000/0001-00)"
                        />
                      </div>
                    </div>
                  )
                }
                
                { /** Razao Social ou Nome Completo */ }
                <div className="col-lg-12 col-md-12 col-sm-6">
                  <div className="form-group" style={{ textAlign: 'left' }}>
                    <input
                      type="text"
                      name="legalName"
                      placeholder={legalNamePlaceholder}
                      className="form-control"
                      value={cadastro.legalName}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                  </div>
                </div>

                { /** Nome Fantasia ou Nome da Empresa */ }
                <div className="col-lg-12 col-md-12 col-sm-6">
                  <div className="form-group" style={{ textAlign: 'left' }}>
                    <input
                      type="text"
                      name="businessName"
                      placeholder={businessNamePlaceholder}
                      className="form-control"
                      value={cadastro.businessName}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </div>
                </div>

                { /** Nome de Usuario */ }
                {
                  cadastro.businessType === PESSOA_JURIDICA.value && (
                    <div className="col-lg-12 col-md-12 col-sm-6">
                      <div className="form-group" style={{ textAlign: 'left' }}>
                        <input
                          type="text"
                          name="userName"
                          placeholder="Nome Completo"
                          className="form-control"
                          value={cadastro.userName}
                          onChange={handleChange}
                          autoComplete="off"
                        />
                      </div>
                    </div>
                  )
                }

                { /** Whatsapp */ }
                <div className="col-lg-12 col-md-12 col-sm-6">
                  <div className="form-group" style={{ textAlign: 'left' }}>
                    <input
                      type="text"
                      name="whatsapp"
                      placeholder="Whatsapp "
                      className="form-control"
                      value={cadastro.whatsapp}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </div>
                </div>

                { /** E-mail do Usuario */ }
                <div className="col-lg-12 col-md-12 col-sm-6">
                  <div className="form-group" style={{ textAlign: 'left' }}>
                    <input
                      type="email"
                      name="userEmail"
                      placeholder="E-mail "
                      className="form-control"
                      value={cadastro.userEmail}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </div>
                </div>
                
                { /** Senha */ }
                <div className="col-lg-12 col-md-12 col-sm-6">
                  <div className="form-group" style={{ textAlign: 'left' }}>
                    <input
                      type="password"
                      name="password"
                      placeholder="Senha"
                      className="form-control"
                      value={cadastro.password}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </div>
                </div>

                { /** Termos e Condicoes */ }
                <div className="col-lg-12 col-md-12 col-sm-6">
                  <div className="form-group" style={{ textAlign: 'left' }}>
                    <label>
                      <input
                        type={"checkbox"}
                        name="acceptTerms"
                        defaultChecked={accept}
                        onChange={handleAcceptTerms}
                        required
                        autoComplete="off"
                        style={{ marginRight: '0.5rem' }}
                      />
                      Eu concordo com os a <Link href="/politica-privacidade"><a>Política de Privacidade</a></Link> e os <Link href="/termos-condicoes"><a>Termos e Condições</a></Link>
                    </label>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12">
                  <button type="submit" className="default-btn">
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CadastroForm;

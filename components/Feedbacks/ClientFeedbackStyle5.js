import React from "react";
import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from "react-tabs";
resetIdCounter();

const ClientFeedbackStyle5 = () => {
  return (
    <>
      <div className="feedback-area bg-F4F8FC ptb-100">
        <div className="container">
          <div className="feedback-tabs">
            <Tabs>
              <TabPanel>
                <p>
                  "Este aplicativo é uma verdadeira revolução para a cidade.
                  Encontrar oportunidades de emprego agora é tão simples quanto
                  um toque. Além disso, a divulgação de eventos locais é
                  incrível. Uma ferramenta indispensável para qualquer pessoa da
                  cidade."
                </p>
                <h6>
                  <span>João Silva</span>
                </h6>
              </TabPanel>

              <TabPanel>
                <p>
                  "Como proprietário de um negócio local, esse aplicativo é um
                  divisor de águas. A facilidade de cadastrar meu
                  estabelecimento e alcançar novos clientes é impressionante.
                  Realmente simplificou meu trabalho e aumentou minha
                  visibilidade."
                </p>
                <h6>
                  <span>Maria Ribeiro</span>
                </h6>
              </TabPanel>

              <TabPanel>
                <p>
                  "Finalmente um aplicativo que simplifica a vida dos amantes da
                  cultura na cidade. Ter acesso a todas as exposições, peças de
                  teatro e shows em um só lugar é incrível. É como ter um guia
                  de entretenimento personalizado na palma da mão."
                </p>
                <h6>
                  <span>Carlos Pereira</span>
                </h6>
              </TabPanel>

              <TabPanel>
                <p>
                  "Esse aplicativo é um facilitador essencial na minha vida. Ele
                  mantém atualizado com as últimas notícias enquanto ajuda a
                  encontrar vagas de emprego para minha esposa. Além disso,
                  programar atividades em família nunca foi tão fácil."
                </p>
                <h6>
                  <span>David Caetano</span>
                </h6>
              </TabPanel>

              <TabPanel>
                <p>
                  "O aplicativo é uma ferramenta essencial para fortalecer a
                  comunidade. Com os fóruns comunitários, podemos discutir e
                  agir em questões importantes para a cidade. É uma forma
                  incrível de unir pessoas em prol de melhorias reais."
                </p>
                <h6>
                  <span>Aline Ferreira</span>
                </h6>
              </TabPanel>

              <TabPanel>
                <p>
                  "Como um entusiasta de aventuras, esse aplicativo é um
                  facilitador surpreendente. Ele me ajuda a descobrir lugares e
                  eventos que eu nunca teria conhecido. Graças a ele, já
                  participei de trilhas, workshops e descobri novos locais para
                  explorar."
                </p>
                <h6>
                  <span>Carolina Pereira</span>
                </h6>
              </TabPanel>

              <TabPanel>
                <p>
                  "A função de serviços municipais deste aplicativo é uma
                  verdadeira benção. Simplifica processos, desde agendar
                  consultas médicas até lidar com impostos, tornando o cotidiano
                  dos funcionários públicos e dos cidadãos muito mais ágil e
                  eficiente."
                </p>
                <h6>
                  <span>Rosa Aparecida</span>
                </h6>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientFeedbackStyle5;

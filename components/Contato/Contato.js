import React from "react";
import { Container } from "./style";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

import Footer from "../Footer/Footer";

export default function Contato() {
  return (
    <>
      <Container>
        <div className="banner">
          <div className="bg">
            <div className="pelicula" />
            <Image src="/assets/img/footer.jpg" width="940" height="624" />
          </div>
          <h2>Venha conhecer</h2>
          <a
            className="visita"
            target="_blank"
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send?phone=5542998178063&text=Ol%C3%A1%2C%20gostaria%20de%20marcar%20uma%20visita%20para%20o%20dia%20..."
          >
            AGENDE SUA VISITA
          </a>
        </div>
        <div className="localizacao" id="localizacao">
          <div className="left-content">
            <div className="img1">
              <Image
                src="/assets/img/comochegar1.jpg"
                width="1200"
                height="800"
              />
            </div>
            <div className="content">
              <div className="bg" />
              <h4>Como chegar</h4>
              <p>
                A Chácara Berté Eventos é um lugar totalmente elegante e repleto
                de requinte, onde celebrar seu casamento vai ser como viver um
                maravilhoso conto de fadas. Reserve já sua data, entre em
                contato e peça seu orçamento grátis. Trata-se do espaço perfeito
                para o seu grande dia. A 5 minutos da Santa Paula, o local é de
                fácil acesso para você e seus convidados.
              </p>
            </div>
            <div className="img2">
              <Image
                src="/assets/img/comochegar2.jpg"
                width="959"
                height="1280"
              />
            </div>
            <div className="img3">
              <Image
                src="/assets/img/comochegar3.jpg"
                width="576"
                height="934"
              />
            </div>
          </div>
          <div className="right-content">
            <h3>ONDE ESTAMOS?</h3>
            <h2>Localização</h2>
            <div className="mapa">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4508.667853113526!2d-50.22071819752363!3d-25.103060112126823!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc6df5a8e68c32c38!2zQ2jDoWNhcmEgQmVydMOp!5e0!3m2!1spt-BR!2sbr!4v1618267713751!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                loading="lazy"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="infos">
          <a href="/" className="logo">
            <Image src="/assets/logo.svg" width="204,45" height="158,52" />
          </a>
          <div>
            <div>
              <label>ENDEREÇO</label>
              <a
                href="https://www.google.com/maps/place/Ch%C3%A1cara+Bert%C3%A9/@-25.1035543,-50.2181518,15z/data=!4m2!3m1!1s0x0:0xc6df5a8e68c32c38?sa=X&ved=2ahUKEwi01-Xl7PjvAhXKKLkGHesVAOcQ_BIwHnoECCwQBQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                R. Alberto Tramontin, 1101 - Contorno, Ponta Grossa - PR,
                84060-300
              </a>
            </div>
            <div>
              <label>CONTATO</label>
              <a href="tel: +5542998178063">
                <FaWhatsapp />
                42 9 9817.8063
              </a>
              <a href="mailto: contato@chacaraberte.com.br">
                contato@chacaraberte.com.br
              </a>
            </div>
            <div>
              <label>ATENDIMENTO</label>
              <p>Terça a Sábado: das 9h às 18h.</p>
            </div>
            <div>
              <a
                href="https://www.instagram.com/chacaraberte/?hl=pt-br"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/chacaraberte/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

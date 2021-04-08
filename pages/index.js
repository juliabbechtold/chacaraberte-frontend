import React, { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { Carousel } from "antd";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Header from "../components/Header/Header";

import { Container, Banner, Sobre, Servicos, Eventos } from "../styles/home.js";

export default function Home() {
  const sobre = useRef();
  const servicos = useRef();
  const eventos = useRef();
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };

  return (
    <>
      <Head>
        <title>Chácara Berté</title>
        <meta name="description" content="Eternizando seus sonhos" />
        <meta
          name="keywords"
          content="festas, casamentos, aniversários, formaturas, chácara, eventos"
        />
        <meta
          property="og:image"
          content={process.env.PUBLIC_URL + "/screenshot.png"}
        />
      </Head>
      <Header />
      <Container>
        <Banner>
          <div className="bg" />
          <div className="img">
            <Image src="/assets/img/banner.jpg" width="1200" height="800" />
          </div>
          <div className="content">
            <a className="logo" href="/">
              <Image
                src="/assets/logo-branca.svg"
                width="206,6"
                height="160,19"
              />
            </a>
            <h2>
              eternizando <br /> <span>seus sonhos</span>
            </h2>
            <h3>SEJA BEM-VINDO</h3>
          </div>
        </Banner>
        <Sobre>
          <div className="text">
            <div>
              <h3>NOSSA HISTÓRIA</h3>
              <h2>Sobre</h2>
              <p>
                Na Chácara Berté Eventos o seu grande dia vai se tornar ainda
                mais especial e único, ficando guardado para sempre na sua
                memória. Além de um atendimento impecável, a chácara tem a
                oferecer a melhor infraestrutura física para realizar o seu
                casamento com total sucesso.
              </p>
              <a className="leia-mais" href="/sobre">
                Leia mais
              </a>
            </div>
          </div>
          <button
            className="arrow"
            type="button"
            onClick={() => sobre.current.next()}
          >
            <IoIosArrowForward />
          </button>
          <div className="carousel">
            <Carousel ref={sobre} {...settings} effect="fade">
              <div className="slider">
                <Image
                  src="/assets/img/sobre1.jpg"
                  width="1600"
                  height="1068"
                />
              </div>
              <div className="slider">
                <Image
                  src="/assets/img/sobre2.jpg"
                  width="1367"
                  height="2048"
                />
              </div>
              <div className="slider">
                <Image
                  src="/assets/img/sobre3.jpg"
                  width="1600"
                  height="1068"
                />
              </div>
              <div className="slider">
                <Image
                  src="/assets/img/sobre4.jpg"
                  width="1367"
                  height="2048"
                />
              </div>
              <div className="slider">
                <Image src="/assets/img/sobre5.jpg" width="960" height="640" />
              </div>
            </Carousel>
          </div>
        </Sobre>
        <Servicos>
          <div className="bg">
            <Image
              src="/assets/img/folhas_detail.svg"
              width="1920"
              height="1411"
            />
          </div>
          <button
            className="arrow"
            type="button"
            onClick={() => servicos.current.next()}
          >
            <IoIosArrowForward />
          </button>
          <Carousel ref={servicos} {...settings} effect="fade">
            <div className="slider">
              <div className="img">
                <Image
                  src="/assets/img/servico1.jpg"
                  width="719"
                  height="475"
                />
              </div>
              <div className="text">
                <div>
                  <h3>SERVIÇOS</h3>
                  <h2>Buffet</h2>
                  <p>
                    Na Chácara Berté Eventos o seu grande dia vai se tornar
                    ainda mais especial e único, ficando guardado para sempre na
                    sua memória. Além de um atendimento impecável, a chácara tem
                    a oferecer a melhor infraestrutura física para realizar o
                    seu casamento com total sucesso.
                  </p>
                </div>
              </div>
            </div>
            <div className="slider">
              <div className="img">
                <Image
                  src="/assets/img/servico1.jpg"
                  width="719"
                  height="475"
                />
              </div>
              <div className="text">
                <div>
                  <h3>SERVIÇOS</h3>
                  <h2>Buffet</h2>
                  <p>
                    Na Chácara Berté Eventos o seu grande dia vai se tornar
                    ainda mais especial e único, ficando guardado para sempre na
                    sua memória. Além de um atendimento impecável, a chácara tem
                    a oferecer a melhor infraestrutura física para realizar o
                    seu casamento com total sucesso.
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </Servicos>
        <Eventos>
          <div className="title">
            <h3>NOSSAS OPÇÕES</h3>
            <h2>Eventos</h2>
          </div>
          <div className="btns">
            <button
              className="arrow"
              type="button"
              onClick={() => eventos.current.prev()}
            >
              <IoIosArrowBack />
            </button>
            <button
              className="arrow"
              type="button"
              onClick={() => eventos.current.next()}
            >
              <IoIosArrowForward />
            </button>
          </div>
          <Carousel ref={eventos} {...settings} effect="fade">
            <div className="slider">
              <div className="text">
                <div>
                  <h4>Aniversários</h4>
                  <p>
                    Na Chácara Berté o seu aniversário será comemorado com toda
                    o significado que ele merece. É além de um simples dia, é o
                    seu dia. Organizamos aniversários com uma estrutura única da
                    qual você lembrará sempre desse dia. Também oferecemos […]
                  </p>
                  <a className="leia-mais" href="/sobre">
                    Leia mais
                  </a>
                </div>
              </div>
              <div className="img">
                <Image
                  src="/assets/img/sobre1.jpg"
                  width="1600"
                  height="1068"
                />
              </div>
              <div className="secimg">
                <Image
                  src="/assets/img/sobre1.jpg"
                  width="1600"
                  height="1068"
                />
              </div>
            </div>
            <div className="slider">
              <div className="text">
                <div>
                  <h4>Aniversários</h4>
                  <p>
                    Na Chácara Berté o seu aniversário será comemorado com toda
                    o significado que ele merece. É além de um simples dia, é o
                    seu dia. Organizamos aniversários com uma estrutura única da
                    qual você lembrará sempre desse dia. Também oferecemos […]
                  </p>
                  <a className="leia-mais" href="/eventos/aniversário">
                    Leia mais
                  </a>
                </div>
              </div>
              <div className="img">
                <Image
                  src="/assets/img/sobre1.jpg"
                  width="1600"
                  height="1068"
                />
              </div>
              <div className="secimg">
                <Image
                  src="/assets/img/sobre1.jpg"
                  width="1600"
                  height="1068"
                />
              </div>
            </div>
          </Carousel>
        </Eventos>
      </Container>
    </>
  );
}

import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Carousel } from "antd";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Header from "../components/Header/Header";
import Contato from "../components/Contato/Contato";
import api from "../services/api";
import ReactHtmlParser from "react-html-parser";

import { Container, Banner, Sobre, Servicos, Eventos } from "../styles/home.js";

export async function getStaticProps() {
  // Fetch data from external API
  const res = await api.get("eventos");
  const res_home = await api.get("/pages?slug=home");

  // Pass data to the page via props
  return {
    props: {
      data_events: res.data,
      data_home: res_home.data[0],
    },
    revalidate: 5,
  };
}

export default function Home({ data_events, data_home }) {
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

  const [sobreImagens, setSobreImagens] = useState();

  useEffect(() => {
    var array = [];

    for (let i = 0; i < 5; i += 1) {
      array[i] = data_home.acf.galeria_de_fotos[i];
      setSobreImagens(array);
    }
  }, []);

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
        <div className="folha-detail">
          <Image src="/assets/img/eventos-folha.svg" width="271" height="740" />
        </div>
        <Banner>
          <a
            className="visita"
            target="_blank"
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send?phone=5542998178063&text=Ol%C3%A1%2C%20gostaria%20de%20marcar%20uma%20visita%20para%20o%20dia%20..."
          >
            AGENDE SUA VISITA
          </a>
          <div className="bg" />
          <div className="img">
            <Image
              src={data_home.acf.banner.imagem.sizes.large}
              width={data_home.acf.banner.imagem.sizes["large-width"]}
              height={data_home.acf.banner.imagem.sizes["large-height"]}
            />
          </div>
          <div className="content">
            <a className="logo" href="/">
              <Image
                src="/assets/logo-branca.svg"
                width="206,6"
                height="160,19"
              />
            </a>
            {ReactHtmlParser(data_home.acf.banner.texto)}
            <h3>SEJA BEM-VINDO</h3>
          </div>
        </Banner>
        <Sobre id="sobre">
          <div className="text">
            <div>
              <h3>NOSSA HISTÓRIA</h3>
              <h2>Sobre</h2>
              <p>{data_home.acf.resumo}</p>
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
              {!!sobreImagens &&
                sobreImagens.map((img, index) => (
                  <div className="slider" key={index}>
                    <Image
                      src={img.sizes.large}
                      width={img.sizes["large-width"]}
                      height={img.sizes["large-height"]}
                    />
                  </div>
                ))}
            </Carousel>
          </div>
        </Sobre>
        <Servicos id="servicos">
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
            {data_home.acf.secao_de_servicos.map((servico, index) => (
              <div className="slider" key={index}>
                <div className="img">
                  <Image
                    src={servico.foto.sizes.large}
                    width={servico.foto.sizes["large-width"]}
                    height={servico.foto.sizes["large-height"]}
                  />
                </div>
                <div className="text">
                  <div>
                    <h3>SERVIÇOS</h3>
                    <h2>{servico.nome}</h2>
                    <p>{servico.descricao}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </Servicos>
        <Eventos id="eventos">
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
            {data_events.map((evento, index) => (
              <div className="slider" key={index}>
                <div className="text">
                  <div>
                    <h4>{evento.title.rendered}</h4>
                    <p>{evento.acf.resumo}</p>
                    <a className="leia-mais" href="/eventos/aniversarios">
                      Leia mais
                    </a>
                  </div>
                </div>
                <div className="img">
                  <Image
                    src={evento.acf.imagem_de_banner.sizes.large}
                    width={evento.acf.imagem_de_banner.sizes["large-width"]}
                    height={evento.acf.imagem_de_banner.sizes["large-height"]}
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </Eventos>
      </Container>
      <Contato />
    </>
  );
}

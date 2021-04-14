import React, { useRef, useState } from "react";
import Head from "next/head";
import Header from "../../components/Header/Header";
import Contato from "../../components/Contato/Contato";
import {
  Container,
  Banner,
  Text,
  Galeria,
  Depoimentos,
} from "../../styles/sobre";
import Image from "next/image";
import { Carousel } from "antd";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ReactBnbGallery from "react-bnb-gallery";

export default function Eventos() {
  const depoimentos = useRef();
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };

  const [isOpenGallery, setIsOpenGallery] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const PHOTOS = [
    { photo: "/assets/img/sobre.jpg", number: 0 },
    { photo: "/assets/img/sobre.jpg", number: 1 },
    { photo: "/assets/img/sobre.jpg", number: 2 },
    { photo: "/assets/img/sobre.jpg", number: 3 },
    { photo: "/assets/img/sobre.jpg", number: 4 },
    { photo: "/assets/img/sobre.jpg", number: 5 },
    { photo: "/assets/img/sobre.jpg", number: 6 },
    { photo: "/assets/img/sobre.jpg", number: 7 },
    { photo: "/assets/img/sobre.jpg", number: 8 },
  ];

  return (
    <>
      <Head>
        <title>Sobre a Chácara Berté</title>
      </Head>
      <Header />
      <Container>
        <Banner>
          <a
            className="visita"
            target="_blank"
            rel="noopener noreferrer"
            href="/"
          >
            COMECE SEU EVENTO
          </a>
          <div className="bg" />
          <div className="img">
            <Image src="/assets/img/sobre.jpg" width="2048" height="1366" />
          </div>
          <div className="content">
            <a className="logo" href="/">
              <Image
                src="/assets/logo-branca.svg"
                width="206,6"
                height="160,19"
              />
            </a>
            <h2>Sobre</h2>
          </div>
        </Banner>
        <Text>
          <h4>“Realizar sonhos sempre foi nosso objetivo”.</h4>
          <p>
            Na Chácara Berté Eventos o seu grande dia vai se tornar ainda mais
            especial e único, ficando guardado para sempre na sua memória. Além
            de um atendimento impecável, a chácara tem a oferecer a melhor
            infraestrutura física para realizar o seu casamento com total
            sucesso.
          </p>
          <p>
            Possui um espaço físico impressionante, o qual tem a proporcionar
            todo conforto e comodidade que se necessita para desfrutar de um
            evento. Além disso, o que chama bastante atenção é a área externa:
            rodeada de verde, onde se pode realizar uma cerimônia linda, com o
            mais puro ar e o canto dos pássaros.
          </p>
        </Text>
        <Galeria>
          <h3>NOSSOS ESTRUTURA</h3>
          <h2>Galeria</h2>
          <div>
            <div
              className="img"
              onClick={() => {
                setIsOpenGallery(true);
                setSelectedIndex(0);
              }}
            >
              <Image src="/assets/img/sobre.jpg" width="2048" height="1366" />
              <div className="hover">
                <h3>VER FOTO</h3>
              </div>
            </div>
            <div
              className="img"
              onClick={() => {
                setIsOpenGallery(true);
                setSelectedIndex(1);
              }}
            >
              <Image src="/assets/img/sobre.jpg" width="2048" height="1366" />
              <div className="hover">
                <h3>VER FOTO</h3>
              </div>
            </div>
            <div
              className="img"
              onClick={() => {
                setIsOpenGallery(true);
                setSelectedIndex(2);
              }}
            >
              <Image src="/assets/img/sobre.jpg" width="2048" height="1366" />
              <div className="hover">
                <h3>VER FOTO</h3>
              </div>
            </div>
            <div
              className="img"
              onClick={() => {
                setIsOpenGallery(true);
                setSelectedIndex(3);
              }}
            >
              <Image src="/assets/img/sobre.jpg" width="2048" height="1366" />
              <div className="hover">
                <h3>VER FOTO</h3>
              </div>
            </div>
            <div
              className="img"
              onClick={() => {
                setIsOpenGallery(true);
                setSelectedIndex(4);
              }}
            >
              <Image src="/assets/img/sobre.jpg" width="2048" height="1366" />
              <div className="hover">
                <h3>VER FOTO</h3>
              </div>
            </div>
            <div
              className="img"
              onClick={() => {
                setIsOpenGallery(true);
                setSelectedIndex(5);
              }}
            >
              <Image src="/assets/img/sobre.jpg" width="2048" height="1366" />
              <div className="hover">
                <h3>VER FOTO</h3>
              </div>
            </div>
            <div
              className="img"
              onClick={() => {
                setIsOpenGallery(true);
                setSelectedIndex(6);
              }}
            >
              <Image src="/assets/img/sobre.jpg" width="2048" height="1366" />
              <div className="hover">
                <h3>VER FOTO</h3>
              </div>
            </div>
            <div
              className="img"
              onClick={() => {
                setIsOpenGallery(true);
                setSelectedIndex(7);
              }}
            >
              <Image src="/assets/img/sobre.jpg" width="2048" height="1366" />
              <div className="hover">
                <h3>VER FOTO</h3>
              </div>
            </div>
            <div
              className="img"
              onClick={() => {
                setIsOpenGallery(true);
                setSelectedIndex(8);
              }}
            >
              <Image src="/assets/img/sobre.jpg" width="2048" height="1366" />
              <div className="hover">
                <h3>VER FOTO</h3>
              </div>
            </div>
          </div>
        </Galeria>
        <Depoimentos>
          <div className="title">
            <h3>EXPERIÊNCIA BERTÉ</h3>
            <h2>Depoimentos</h2>
          </div>
          <div className="btns">
            <button
              className="arrow"
              type="button"
              onClick={() => depoimentos.current.prev()}
            >
              <IoIosArrowBack />
            </button>
            <button
              className="arrow"
              type="button"
              onClick={() => depoimentos.current.next()}
            >
              <IoIosArrowForward />
            </button>
          </div>
          <Carousel ref={depoimentos} {...settings} effect="fade">
            <div className="slider">
              <div className="text">
                <div>
                  <h3>“Uma experiência mais que incrível, foi única.”</h3>
                  <p>
                    “Eu não tenho como agradecer, não tem palavra ou sentimento
                    que explique tudo que vivemos! Foi o melhor sentimento que
                    vivemos em nossas vidas! Inexplicável! Quando entramos na
                    casa em 2015, não tínhamos noção da melhor escolha íamos
                    fazer. Estava tudo impecável, a decoração eu não tenho como
                    explicar… A mesa do bolo, doces, todos os detalhes que nunca
                    vão sair da memória de todos ali presentes.
                  </p>
                  <p className="nome">Bianca e Fernando.</p>
                </div>
              </div>
              <div className="img">
                <Image
                  src="/assets/img/sobre1.jpg"
                  width="1600"
                  height="1068"
                />
              </div>
            </div>
          </Carousel>
        </Depoimentos>
        <div className="folhasdetail1">
          <Image src="/assets/img/folha1-sobre.svg" width="554" height="1022" />
        </div>
        <div className="folhasdetail2">
          <Image src="/assets/img/folha2-sobre.svg" width="422" height="1486" />
        </div>
        <ReactBnbGallery
          show={isOpenGallery}
          photos={PHOTOS}
          onClose={() => setIsOpenGallery(false)}
          activePhotoIndex={selectedIndex}
        />
      </Container>
      <Contato />
    </>
  );
}

import React, { useRef, useState } from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Contato from "../components/Contato/Contato";
import { Container, Banner, Text, Galeria, Depoimentos } from "../styles/sobre";
import Image from "next/image";
import { Carousel, notification, Select, DatePicker } from "antd";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ReactBnbGallery from "react-bnb-gallery";
import { Modal } from "../styles/home";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "react-input-mask";
import ademail from "../services/ademail";
import { IoClose } from "react-icons/io5";

export default function Sobre() {
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

  const { Option } = Select;
  const [disabledButton, setdisabledButton] = useState(false);
  const [data, setData] = useState();
  const [dataErro, setDataErro] = useState(false);
  const [evento, setEvento] = useState();
  const [eventoErro, setEventoErro] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      nome: "",
      email: "",
      telefone: "",
      pessoas: "",
      mensagem: "",
    },

    validationSchema: Yup.object({
      nome: Yup.string().required("*Campo nome é obrigatório"),
      email: Yup.string()
        .email("Informe um e-mail válido")
        .required("*Campo e-mail é obrigatório"),
      telefone: Yup.string().required("*Campo telefone é obrigatório"),
      pessoas: Yup.string().required("*Campo Número de pessoas é obrigatório"),
      mensagem: Yup.string().required("*Campo mensagem é obrigatório"),
    }),

    onSubmit: async (values, { resetForm }) => {
      const body = `
                              <p>Nome: ${values.nome}</p>
                              <p>Número: ${values.telefone}</p>
                              <p>Email: ${values.email}</p>
                              <p>Data do Evento: ${data}</p>
                              <p>Número de pessoas: ${values.pessoas}</p>
                              <p>Tipo de Evento: ${evento}</p>
                              <p>Mensagem: ${values.mensagem}</p>
                            `;

      const mail = {
        // to: "email@cliente.com.br",
        to: "juliabbechtold@gmail.com",
        from: values.email,
        as: values.nome,
        // bcc: JSON.stringify(["web@agenciaade.com.br"]),
        subject: "Novo contato via site - Chácara Berté",
        message: body,
      };

      try {
        if (data === undefined) {
          setDataErro(true);
        }

        if (evento === undefined) {
          setEventoErro(true);
        }

        if (data !== undefined && evento !== undefined) {
          setdisabledButton(true);
          // Sucesso ao enviar
          await ademail.post("/email", mail);

          notification.success({
            message: "Contato enviado com sucesso! 🚀",
            placement: "bottomRight",
          });

          setdisabledButton(false);
          resetForm();
          setEvento();
          setOpenModal(false);
        }
      } catch (error) {
        // Erro ao enviar
        setdisabledButton(false);
        notification.error({
          message: "Não foi possivel concluir o cadastro! 😔",
          description: "Verfique os campos e tente novamente mais tarde...",
          placement: "bottomRight",
        });
      }
    },
  });

  function onChangeDate(date, dateString) {
    setData(dateString);
    setDataErro(false);
  }

  function onChangeEvento(value) {
    setEvento(value);
    setEventoErro(false);
  }

  return (
    <>
      <Head>
        <title>Sobre a Chácara Berté</title>
      </Head>
      <Header />
      <Container>
        <Banner>
          <button className="visita" onClick={() => setOpenModal(true)}>
            COMECE SEU EVENTO
          </button>
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
      <Modal className={openModal ? "open" : ""}>
        <form onSubmit={formik.handleSubmit}>
          <div className="bg">
            <Image
              src="/assets/img/folhas-orcamento.svg"
              width="1920"
              height="1310"
            />
          </div>
          <button
            className="close"
            type="button"
            onClick={() => setOpenModal(false)}
          >
            <IoClose />
          </button>
          <div className="content">
            <h2>Faça seu orçamento</h2>
            <div className="nome">
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nome}
              />
              {formik.touched.nome && formik.errors.nome ? (
                <span className="erro">{formik.errors.nome}</span>
              ) : null}
            </div>
            <div>
              <Input
                type="tel"
                name="telefone"
                mask={
                  formik.values.telefone.length <= 14
                    ? "(99) 9999-9999?"
                    : "(99) 99999-9999"
                }
                formatChars={{ 9: "[0-9]", "?": "[0-9 ]" }}
                maskChar={null}
                placeholder="Número"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.telefone}
              />
              {formik.touched.telefone && formik.errors.telefone ? (
                <span className="erro">{formik.errors.telefone}</span>
              ) : null}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <span className="erro">{formik.errors.email}</span>
              ) : null}
            </div>
            <div>
              <DatePicker
                format="DD/MM/YYYY"
                placeholder="Data do evento"
                onChange={onChangeDate}
              />
              {dataErro ? (
                <span className="erro">*Campo data é obrigatório</span>
              ) : null}
            </div>
            <div>
              <input
                type="text"
                name="pessoas"
                placeholder="Número de Pessoas"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.pessoas}
              />
              {formik.touched.pessoas && formik.errors.pessoas ? (
                <span className="erro">{formik.errors.pessoas}</span>
              ) : null}
            </div>
            <div>
              <Select
                value={evento}
                placeholder="Tipo de Evento"
                onChange={onChangeEvento}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
              {eventoErro ? (
                <span className="erro">*Campo evento é obrigatório</span>
              ) : null}
            </div>
            <div className="mensagem">
              <textarea
                name="mensagem"
                placeholder="Mensagem"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.mensagem}
              />
              {formik.touched.mensagem && formik.errors.mensagem ? (
                <span className="erro">{formik.errors.mensagem}</span>
              ) : null}
            </div>
            <div className="btn">
              <button type="submit">Enviar</button>
              <div className={disabledButton ? "disabled" : ""} />
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}

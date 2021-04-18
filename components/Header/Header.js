import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Navbar, Menu } from "./style";
import useSound from "use-sound";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Modal } from "../../styles/home";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "react-input-mask";
import ademail from "../../services/ademail";
import { IoClose } from "react-icons/io5";
import { notification, Select, DatePicker } from "antd";

export default function Header() {
  const [fixedMenu, setFixedMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [soundActive, setSoundActive] = useState(true);
  const waveSound = "/assets/audio/All of mE_160k.mp3";
  const [play, { stop }] = useSound(waveSound);

  function handleClick() {
    if (soundActive === true) {
      play();
    } else stop();
  }

  useEffect(() => {
    const handleScroll = (e) => {
      setFixedMenu(e.srcElement.scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll, true);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <Navbar isOpen={openMenu} className={fixedMenu ? "fixed" : ""}>
        <div>
          <button
            className="sound"
            onClick={() => {
              setSoundActive(!soundActive);
              handleClick();
            }}
          >
            {soundActive ? (
              <Image
                src="/assets/img/nosound.svg"
                width="28,41"
                height="24,36"
              />
            ) : (
              <Image src="/assets/img/sound.svg" width="24,43" height="24,36" />
            )}
            <p>
              Para deixar a <br />
              rotina para lá
            </p>
          </button>

          <button
            className={`hamburger hamburger--squeeze ${
              openMenu ? "is-active" : ""
            }`}
            type="button"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </Navbar>
      <Menu isOpen={openMenu}>
        <div className="bg">
          <Image src="/assets/img/menu-folhas.svg" width="1920" height="1078" />
        </div>
        <a href="/" className="logo">
          <Image src="/assets/logo.svg" width="204,45" height="158,52" />
        </a>
        <div className="content">
          <nav>
            <ul>
              <li>
                <a href="/#sobre" onClick={() => setOpenMenu(false)}>
                  SOBRE
                </a>
              </li>
              <li>
                <a href="/#servicos" onClick={() => setOpenMenu(false)}>
                  SERVIÇOS
                </a>
              </li>
              <li>
                <a href="/#eventos" onClick={() => setOpenMenu(false)}>
                  EVENTOS <p>Galeria</p>
                </a>
              </li>
              <li>
                <a href="#localizacao" onClick={() => setOpenMenu(false)}>
                  LOCALIZAÇÃO
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setOpenModal(true);
                    setOpenMenu(false);
                  }}
                >
                  FAÇA SEU ORÇAMENTO
                </button>
              </li>
            </ul>
          </nav>
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
      </Menu>
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

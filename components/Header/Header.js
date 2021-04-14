import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Navbar, Menu } from "./style";
import useSound from "use-sound";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

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
                <a href="/">FAÇA SEU ORÇAMENTO</a>
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
    </>
  );
}

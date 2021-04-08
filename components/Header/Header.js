import React, { useState } from "react";
import Image from "next/image";
import { Navbar, Menu } from "./style";
import useSound from "use-sound";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [soundActive, setSoundActive] = useState(false);
  const waveSound = "";
  const [play, { stop }] = useSound(waveSound);

  function handleClick() {
    if (soundActive) {
      play();
    } else stop();
  }

  return (
    <>
      <Navbar isOpen={openMenu}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://api.whatsapp.com/send?phone=5542998178063&text=Ol%C3%A1%2C%20gostaria%20de%20marcar%20uma%20visita%20para%20o%20dia%20..."
        >
          AGENDE SUA VISITA
        </a>
        <div>
          <button
            className="sound"
            onClick={() => {
              setSoundActive(!soundActive);
              handleClick();
            }}
          >
            <Image src="/assets/img/sound.svg" width="24,43" height="24,36" />
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
      <Menu isOpen={openMenu}></Menu>
    </>
  );
}

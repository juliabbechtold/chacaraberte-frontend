import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "./style";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Navbar isOpen={openMenu}>
      <a href="/">
        <Image src="/assets/logo.svg" width="200" height="73.61" />
      </a>
      <nav>
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/" onClick={() => setOpenMenu(false)}>
              SOBRE NÓS
            </a>
          </li>
          <li>
            <a href="/blog" onClick={() => setOpenMenu(false)}>
              BLOG
            </a>
          </li>
          <li>
            <a href="/" onClick={() => setOpenMenu(false)}>
              CONTATO
            </a>
          </li>
        </ul>
      </nav>
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
    </Navbar>
  );
}

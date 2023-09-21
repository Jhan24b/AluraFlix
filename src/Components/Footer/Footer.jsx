import './Footer.css';
import React from "react";
import MainLogo from "../Files/LogoMain.png";

export default function Footer() {
  return (
    <footer className='footer'>
      <img src={MainLogo} alt="Logo de Alura Flix" className="logo" />
      <strong>Develop by Anthony Torres</strong>
    </footer>
  );
}

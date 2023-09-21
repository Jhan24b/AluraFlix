import './Header.css';
import React from "react";
import MainLogo from "../Files/LogoMain.png";

export default function Header(props) {
  return (
    <header className='header'>
      <img src={MainLogo} alt="Logo de Alura Flix" className="logo" />
      <button className="menu__button" alt ="Agregar" onClick= {props.cambiarMostrar}>
        <span>Nuevo Video!</span>
      </button>
    </header>
  );
}

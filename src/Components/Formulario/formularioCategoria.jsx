import "./formularioCategoria.css";
import Campo from "../Campo/Campo";
import Boton from "../Boton/boton";
import Tabla from "../Tabla/Tabla"
import { useState } from "react";
import { v4 as uuid } from "uuid";
import React from "react";

function FormularioCategoria(props) {

  const [nombre, actualizarNombre] = useState("");
  const [descripcion, actualizarDescripcion] = useState("");
  const [codigo, actualizarCodigo] = useState("");
  const [color, actualizarColor] = useState("");

  const { crearCurso, cursos } = props;

  const manejarNuevaCategoria = (e) => {
    e.preventDefault();
    crearCurso({
      id: uuid,
      titulo: nombre,
      descripcion,
      brief: "",
      colorPrimario: color,
      colorSecundario: color,
      codigo,
      videos: []
    });
  }

  const limpiar = (e) =>{
    e.preventDefault();
    actualizarNombre('');
    actualizarDescripcion('');
    actualizarCodigo('');
    actualizarColor('');
  }

  return <section className="formularioCategoria">
    <form onSubmit={manejarNuevaCategoria} className="formulario">
      <h2>Nueva Categoria</h2>
      <Campo titulo="Nombre" placeholder="Ingrese el nombre" required valor={nombre} actualizarValor={actualizarNombre} />
      <Campo titulo="Descripcion" placeholder="Ingrese una descripcion" required valor={descripcion} actualizarValor={actualizarDescripcion} />
      <Campo titulo="Color" placeholder="Ingrese el color en HEX" required valor={color} actualizarValor={actualizarColor}
        type="color"
      />
      <Campo titulo="Codigo" placeholder="Ingrese el codigo de seguridad" required valor={codigo} actualizarValor={actualizarCodigo} />
      <div className="botones">
        <Boton title="Guardar" />
        <Boton title="Limpiar" onClick={limpiar}/>
      </div>
    </form>
    <Tabla eliminar={props.eliminarCurso} 
    editar = {props.actualizaCurso}
    lista = {cursos} />
  </section>
}

export default FormularioCategoria;
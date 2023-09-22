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
  const [cmodificado, actualizarCmodificado] = useState();

  const { crearCurso, cursos, actualizaCurso } = props;

  const manejarNuevaCategoria = (e) => {
    e.preventDefault();
    if(!cmodificado){
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
    }else{
      actualizaCurso({
        id: cmodificado.id,
        titulo: nombre,
        descripcion: descripcion,
        brief: cmodificado.brief,
        colorPrimario: color,
        colorSecundario: color,
        codigo: cmodificado.codigo,
        videos: cmodificado.videos
      });
    }
    limpiar();
  }

  const limpiar = () => {
    actualizarNombre('');
    actualizarDescripcion('');
    actualizarCodigo('');
    actualizarColor('');
  }

  const modificarCurso = (curso) => {
    actualizarNombre(curso.titulo);
    actualizarDescripcion(curso.descripcion);
    actualizarCodigo(curso.codigo);
    actualizarColor(curso.colorPrimario);
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
        <Boton title="Limpiar" onClick={limpiar} />
      </div>
    </form>
    <Tabla eliminar={props.eliminarCurso}
      editar={actualizaCurso}
      modificar={modificarCurso}
      modificado = {actualizarCmodificado}
      lista={cursos} />
  </section>
}

export default FormularioCategoria;
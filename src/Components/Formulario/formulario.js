import "../Formulario/formulario.css";
import Campo from "../Campo/Campo";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/boton";

import { useState } from "react";
import { v4 as uuid } from "uuid";

function Formulario(props) {

    const [titulo, actualizarTitulo] = useState("");
    const [enlace, actualizarEnlace] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [categoria, actualizarCategoria] = useState("");
    const [descripcion, actualizarDescripcion] = useState("");
    const [brief, actualizarBrief] = useState("");
    const [codigo, actualizarCodigo] = useState("");
    const {registrarVideo} = props;

    const manejarEnvioNuevo = (event) => {
        event.preventDefault();
        const datosEnviar = {
            id: uuid(),
            link: enlace,
            img: foto
        }
        registrarVideo(datosEnviar, categoria);
        limpiarCampos();
    }

    const limpiarCampos = () => {
        actualizarTitulo('');
        actualizarEnlace('');
        actualizarFoto('');
        actualizarCategoria('');
        actualizarDescripcion('');
        actualizarCodigo('');
        actualizarBrief(brief);
    };

    return (
        <section className="formularioVideo">
            {(
                <div className="contenedor">
                    <form onSubmit={manejarEnvioNuevo}>
                        <h2>Nuevo Video</h2>
                        <Campo titulo="Titulo" placeholder="Titulo" required valor={titulo} actualizarValor={actualizarTitulo} />
                        <Campo titulo="Link" placeholder="Link del video" required valor={enlace} actualizarValor={actualizarEnlace} />
                        <Campo titulo="Foto" placeholder="Link imagen del video" required valor={foto} actualizarValor={actualizarFoto} />
                        <ListaOpciones valor={categoria} actualizarValor={actualizarCategoria} equipos={props.data} />
                        <Campo titulo="Descripcion" placeholder="Ingrese una descripcion" required valor={descripcion} actualizarValor={actualizarDescripcion} />
                        <Campo titulo="Codigo" placeholder="Ingrese el codigo de seguridad" required valor={codigo} actualizarValor={actualizarCodigo} />
                        <div className="cajaBotones">
                            <Boton title="Guardar" />
                            <div className="botonesAcciones">
                                <div className="limpiar">
                                    <Boton onClick={limpiarCampos} title="Limpiar" />
                                </div>
                                <div className="crear">
                                    <Boton type="button" onClick={props.cambiarMostrarCategoria} title="Nueva Categoria" />
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            )}

        </section>
    );
}

export default Formulario;
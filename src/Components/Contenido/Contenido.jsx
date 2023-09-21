import './Contenido.css';
import {v4 as uuidv4} from "uuid"; 
import { useState } from 'react';
import Curso from '../Curso/Curso';

function Contenido() {
    const [colaboradores, actualizarColaboradores] = useState([]);
    const [equipos, actualizarEquipos] = useState([{
        titulo: "Programming",
        colorPrimario: "#57c278",
        colorSecundario: "#D9F7E9",
        id: uuidv4()
      }, {
        titulo: "Front End",
        colorPrimario: "#82cffa",
        colorSecundario: "#e8f8ff",
        id: uuidv4()
      }, {
        titulo: "Data Science",
        colorPrimario: "#a6d157",
        colorSecundario: "#f0f8e2",
        id: uuidv4()
      }, {
        titulo: "Dev Ops",
        colorPrimario: "#e06b69",
        colorSecundario: "#fde7e8",
        id: uuidv4()
      }, {
        titulo: "UIX Design",
        colorPrimario: "#db6ebf",
        colorSecundario: "#fae9f5",
        id: uuidv4()
      }, {
        titulo: "Mobile",
        colorPrimario: "#ffba05",
        colorSecundario: "#fff5d9",
        id: uuidv4()
      }, {
        titulo: "Innovation and Managment",
        colorPrimario: "#ff8a29",
        colorSecundario: "#ffeedf",
        id: uuidv4()
      }])
    
      //Crear Equipo
    //   const crearEquipo = (nuevoEquipo) => {
    //     console.log(nuevoEquipo);
    //     actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuidv4() }])
    //   }

    // //Registra al nuevo colaborador
    // const registrarColaborador = (colaborador) => {
    //     //Spread Operator hace copia de un valor en este caso de colaboradores
    //     actualizarColaboradores([...colaboradores, colaborador]);
    // }
      
    //Actualizar color de equipo
    const actualizarColor = (color, id) => {
        const equiposActualizados = equipos.map((equipo) => {
            if (equipo.id === id) {
                equipo.colorPrimario = color;
            }
            return equipo;
        })
        actualizarEquipos(equiposActualizados);
    }

    //Eliminar a un colaborador
    const eliminarColaborador = (id) => {
        console.log("Eliminando colaborador", id);
        const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
        actualizarColaboradores(nuevosColaboradores);
    }

    //Favorito
    const like = (id) => {
        const colaboradoresActualizados = colaboradores.map((colaborador) => {
            if (colaborador.id === id) {
                colaborador.fav = !colaborador.fav;
            }
            return colaborador
        })
        actualizarColaboradores(colaboradoresActualizados);
    }
    return (
        <div>
            <div>baby</div>
            {
                equipos.map((dato) => {
                    return <Curso datos={dato} key={dato.id}
                        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === dato.titulo)}
                        eliminarColaborador={eliminarColaborador}
                        actualizarColor={actualizarColor}
                        like={like}
                    />
                })
            }
        </div>
    )
}

export default Contenido;